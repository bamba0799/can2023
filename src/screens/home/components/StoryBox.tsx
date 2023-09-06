import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { HomeStackParamList } from '@navigation/app/home/home/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Story } from '@store/story';

function StoryBox({ data, index }: { data: Story, index: number }) {
  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
    <Pressable
      className={`h-20 w-20 rounded-full border-2 p-0.5
        ${data.viewed ? "border-gray-300" : "border-primary"}
      `}
      onPress={() => navigate('Home/Story', index)}
    >
      <View className="absolute left-0.5 top-0.5 h-full w-full rounded-full bg-gray-300" />
      <Image
        source={data.source as number}
        className="absolute left-0.5 top-0.5 z-[99] h-full w-full rounded-full"
        resizeMode="cover"
      />
    </Pressable>
  );
};

export { StoryBox };
