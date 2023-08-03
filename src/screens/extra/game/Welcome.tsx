import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Header } from '@components/Header';

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from '@components/Button';

export const Welcome = ({ navigation }: any) => {


  return (
    <ScrollView className="flex-1 bg-white ">
      <Header
        showBackIcon
        title="Quiz"
      />
      <View className='bg-white h-full w-full items-center mt-7'>
        <View className='flex-row items-center'>
          <Text style={{ fontSize: 30 }} className='font-bold  font-Arial"'>Venez gagner </Text>
          <Text style={{ fontSize: 40 }} className='rotate-6'>🏆</Text>
        </View>
        <ImageBackground className='w-80 h-72' source={require('@assets/images/imTicket/quiz.png')} />
        <View className='items-center mx-3'>
          <Text className='font-bold text-xl mb-2'>Jouez pour gagner des lots</Text>
          <Text className=' text-lg'>Pour jouer, appuyez sur le bouton commencer ci-dessous.
            Ensuite attendez que les questions s'affichent. Une fois c'est fait, Appuyez
            sur la reponse pour repondre a la question et ceux jusqu'a la fin. Plus vous reponsez vite plus vous avez en points
          </Text>
        </View>
        <TouchableOpacity className='bg-orange-500 w-80 h-10 items-center justify-center mt-16 rounded-full mb-10' activeOpacity={0.7} onPress={() => navigation.navigate('Game/Quiz')}>
          <Text className='text-white text-xl font-bold'>Commencer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

