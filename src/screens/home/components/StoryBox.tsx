import React from 'react';
import { View, Image, Pressable } from 'react-native';
import { HomeStackParamList } from '@navigation/app/home/home/types';
import { NavigationProp, useNavigation } from '@react-navigation/native';

const StoryBox: React.FC<{ data: any }> = ({ data }) => {
  const { navigate } = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
    <Pressable
      className="h-20 w-20 rounded-full border-2 border-primary p-0.5"
      onPress={() => navigate('Home/Story', data)}
    >
      <View className="absolute left-0.5 top-0.5 h-full w-full rounded-full bg-gray-300" />
      <Image
        source={data.thumbnail}
        className="absolute left-0.5 top-0.5 z-[99] h-full w-full rounded-full"
        resizeMode="cover"
      />
    </Pressable>
  );
};

export { StoryBox };
