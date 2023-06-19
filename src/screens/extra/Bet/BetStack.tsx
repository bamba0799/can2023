import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { BetStackParamList } from './types';
import { ExtraStackParamList } from '@navigation/app/home/extra/types';
import { Main } from './Main';

const Stack = createNativeStackNavigator<BetStackParamList>();

const BetStack: React.FC<
  NativeStackScreenProps<ExtraStackParamList, 'Extra/Bet'>
> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Bet/Main"
        component={Main}
      />
    </Stack.Navigator>
  );
};

export default BetStack;
