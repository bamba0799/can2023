import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '@components/Header';

export const Welcome = () => {
  return (
    <View className="flex-1">
      <Header title="Welcome" />
      <Text>Welcome</Text>
    </View>
  );
};
