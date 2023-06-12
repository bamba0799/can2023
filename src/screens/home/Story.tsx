import React from 'react';
import { Text, View } from 'react-native';
import { HomeStackParamList } from '@navigation/app/home/home/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useHideBottomTab } from '@hooks/navigation';
import { Center } from '@components/Center';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@components/Button';
import { Ionicons } from '@expo/vector-icons';

const Story: React.FC<
  NativeStackScreenProps<HomeStackParamList, 'Home/Story'>
> = ({ navigation, route: { params: data } }) => {
  useHideBottomTab();

  return (
    <View className="flex-1">
      <SafeAreaView className="absolute z-[99] w-full flex-row justify-end px-4">
        <Button
          onPress={navigation.goBack}
          className="z-[99] mt-3 self-start rounded-full bg-gray-300/80 p-1"
        >
          <Ionicons
            name="ios-close-sharp"
            size={20}
          />
        </Button>
      </SafeAreaView>

      <Center>
        <Text>StoryView</Text>
      </Center>
    </View>
  );
};

export { Story };
