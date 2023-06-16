import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StadiumsParamList } from '@navigation/app/home/stadiums/types';
import { Header } from '@components/Header';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';

export const StadiumDetails: React.FC<
  NativeStackScreenProps<StadiumsParamList, 'Stadium/Details'>
> = ({ navigation, route }) => {
  return (
    <View className="flex-1">
      <Header
        title={route.params?.name}
        showBackIcon
      />
      <ScreenContentLayout showsVerticalScrollIndicator={false}>
        <Text>In process...</Text>
      </ScreenContentLayout>
    </View>
  );
};
