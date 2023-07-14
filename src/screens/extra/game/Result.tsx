import React from 'react';
import { View, Text } from 'react-native';
import { Header } from '@components/Header';

export const Result = () => {
  return (
    <View className="flex-1">
      <Header title="Résultat" />
      <Text>Result</Text>
    </View>
  );
};
