import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { HomeStackParamList } from '@navigation/app/home/home/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useHideBottomTab } from '@hooks/navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@components/Button';
import { Ionicons } from '@expo/vector-icons';
import { useStoryStore } from '@store/story';

const { width, height } = Dimensions.get('window');
const DEFAULT_STORY_DURATION = 5000 as const;

const StoryView: React.FC<
  NativeStackScreenProps<HomeStackParamList, 'Home/Story'>
> = ({ navigation, route: { params: storyIndex } }) => {
  useHideBottomTab();
  const activeStoryIndex = storyIndex as unknown as number;

  const insets = useSafeAreaInsets();
  const [current, setCurrent] = useState(0);
  const [trackedIdx, setTrackedIdx] = useState(storyIndex as unknown as number);
  const { stories: dummyStoryData, mutateStories } = useStoryStore();
  const [activeStoryList, setActiveStoryList] = useState(
    dummyStoryData.slice(activeStoryIndex)
  );

  // PROGESS ANIMATION
  const progress = useRef(new Animated.Value(0)).current;

  const start = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: DEFAULT_STORY_DURATION,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) next();
    });
  };

  const next = () => {
    if (current !== activeStoryList.length - 1) {
      mutateStories(
        dummyStoryData.map((s, i) => {
          return {
            ...s,
            viewed: i === trackedIdx ? true : s.viewed,
          };
        })
      );
      progress.setValue(0);
      setCurrent((prev) => ++prev);
      setTrackedIdx((prev) => ++prev);
    } else {
      mutateStories(
        dummyStoryData.map((s, i) => {
          return {
            ...s,
            viewed: i === trackedIdx ? true : s.viewed,
          };
        })
      );
      close();
    }
  };

  const previous = () => {
    if (current - 1 >= 0) {
      let tempData = activeStoryList;
      tempData[current - 1].viewed = false;
      progress.setValue(0);
      setActiveStoryList(tempData);
      setCurrent((prev) => --prev);
      setTrackedIdx((prev) => --prev);
    } else {
      close();
    }
  };

  const close = () => {
    setCurrent(0);
    setTrackedIdx(0);
    progress.setValue(0);
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <Image
        source={activeStoryList[current].source as number}
        style={{
          width,
          height,
          resizeMode: 'cover',
        }}
        onLoadEnd={() => {
          progress.setValue(0);
          start();
        }}
      />

      {/* PROGRESS BARS */}
      <View
        className="absolute z-50 w-full flex-row items-center justify-evenly"
        style={{
          paddingTop: insets.top,
          paddingHorizontal: 16,
          columnGap: 6,
        }}
      >
        {activeStoryList.map(({ id }, idx) => {
          return (
            <View
              key={id}
              className="relative h-1 flex-1 flex-row rounded-full bg-white/50"
            >
              <Animated.View
                style={{
                  flex: current === idx ? progress : 0,
                  height: 4,
                  backgroundColor: 'rgba(255 255 255 / 1)',
                  borderRadius: 99,
                }}
              />
            </View>
          );
        })}

        {/* CLOSE BUTTON */}
        <Button
          className="absolute -bottom-12 right-4"
          onPress={close}
        >
          <Ionicons
            name="ios-close-sharp"
            size={32}
            color={'white'}
          />
        </Button>
      </View>

      {/* SIDE NAVIGATION BUTTIONS */}
      <View className="absolute left-0 top-0 z-[1] h-full w-full flex-row justify-between">
        <TouchableOpacity
          className="h-full w-[30%]"
          onPress={() => previous()}
          children={<View></View>}
        />
        <TouchableOpacity
          className="h-full w-[30%]"
          onPress={(e) => {
            next();
          }}
          children={<View></View>}
        />
      </View>
    </View>
  );
};

export { StoryView };
