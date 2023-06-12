import { View, FlatList, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Video, ResizeMode } from 'expo-av';
import { HomeStackParamList } from '@navigation/app/home/home/types';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { Header } from '@components/Header';
import { StoryBox } from './components/StoryBox';

const dummyStoryData = [
  {
    id: '1',
    label: '',
    thumbnail: require('@assets/images/story/ivory-cost.jpeg'),
    media: {
      type: 'image',
      source: require('@assets/images/story/ivory-cost.jpeg'),
    },
  },
  {
    id: '2',
    label: '',
    thumbnail: require('@assets/images/story/trophy.avif'),
    media: {
      type: 'image',
      source: require('@assets/images/story/trophy.avif'),
    },
  },
  {
    id: '3',
    label: '',
    thumbnail: require('@assets/images/story/celebration-civ.webp'),
    media: {
      type: 'image',
      source: require('@assets/images/story/celebration-civ.webp'),
    },
  },
  {
    id: '4',
    label: '',
    thumbnail: require('@assets/images/story/trophy-2.jpg'),
    media: {
      type: 'image',
      source: require('@assets/images/story/trophy-2.jpg'),
    },
  },
  {
    id: '5',
    label: '',
    thumbnail: require('@assets/images/story/reigning-champs.jpeg'),
    media: {
      type: 'image',
      source: require('@assets/images/story/reigning-champs.jpeg'),
    },
  },
];

const highlights = [
  { id: '1', url: require('@assets/videos/vid-1.mov') },
  { id: '2', url: require('@assets/videos/vid-2.mov') },
  { id: '3', url: require('@assets/videos/vid-3.mov') },
];

const Main: React.FC<
  NativeStackScreenProps<HomeStackParamList, 'Home/Main'>
> = ({ navigation, route }) => {
  return (
    <View className="flex-1">
      <Header
        title={() => (
          <View className="flex-row">
            <Text className="font-[extraBold] text-lg text-primary">Fan</Text>
            <Text className="font-[extraBold] text-lg">Xperience</Text>
          </View>
        )}
      />

      <ScreenContentLayout
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 32,
          paddingTop: 22,
        }}
      >
        {/* Stories */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={dummyStoryData}
          contentContainerStyle={{
            paddingHorizontal: 16,
            columnGap: 10,
          }}
          renderItem={({ item }) => <StoryBox data={item} />}
        />

        {/* Best goals */}
        <View className="mt-8">
          <View className="px-4">
            <Text className="text-lg font-bold">Temps forts</Text>
          </View>
          <FlatList
            horizontal
            data={highlights}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
            className="mt-4"
            contentContainerStyle={{
              columnGap: 12,
              paddingHorizontal: 16,
            }}
            renderItem={({ item }) => (
              <View className="aspect-[9/12] w-[180px] rounded-2xl">
                <View className="absolute z-0 h-full w-full rounded-2xl bg-gray-300" />
                <Video
                  source={item.url}
                  className="absolute z-[98] aspect-[9/12] w-[180px] rounded-2xl"
                  resizeMode={ResizeMode.COVER}
                  useNativeControls
                  isLooping
                  isMuted
                />
              </View>
            )}
          />

          {/* Annoucement */}
          <View className="mt-8 h-20 flex-row gap-x-3 px-4">
            <View className="grow items-center justify-center rounded-xl bg-gray-200">
              <Text className="font-[medium] text-gray-500">
                Espace publicitaire
              </Text>
            </View>
          </View>
        </View>

        {/* awards (picture) */}
        <View className="mt-8">
          <View className="px-4">
            <Text className="text-lg font-bold">
              Distinctions individuelles
            </Text>
          </View>
          <FlatList
            horizontal
            data={[...Array(3).keys()]}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0}
            snapToInterval={342}
            snapToAlignment="center"
            className="mt-4"
            contentContainerStyle={{
              columnGap: 16,
              paddingHorizontal: 16,
            }}
            renderItem={({ item }) => (
              <View
                key={item}
                className="h-[180] w-[320px] rounded-2xl bg-gray-300"
              />
            )}
          />
        </View>
      </ScreenContentLayout>
    </View>
  );
};

export { Main };
