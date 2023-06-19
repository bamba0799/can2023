import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BetStackParamList } from './types';
import { Header } from '@components/Header';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';

export const Main: React.FC<
  NativeStackScreenProps<BetStackParamList, 'Bet/Main'>
> = ({ navigation, route }) => {
  return (
    <View className="flex-1">
      <Header
        title="Jeux pronostiques"
        showBackIcon
      />

      <ScreenContentLayout>
        <Text>{route.name}</Text>
      </ScreenContentLayout>
    </View>
  );
};
