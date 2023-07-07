import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { BetStackParamList } from './types';
import { Header } from '@components/Header';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { AntDesign, Feather, SimpleLineIcons } from '@expo/vector-icons';
import axios from 'axios';
import dayjs from 'dayjs';

export const BetConfirmation: React.FC<
  NativeStackScreenProps<BetStackParamList, 'Bet/BetConfirmation'>
> = ({ navigation, route }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  // État pour stocker la date sélectionnée
  const [selectedDate, setSelectedDate] = useState(null);
  const [matche, setMatche] = useState<any>();
  console.log(matche);

  // Données des matchs
  const matchData = [
    {
      date: '2023-06-20',

      matches: [
        {
          id: 1,
          homeTeam: 'BENIN',
          awayTeam: 'TOGO',
          time: '12:00',
          cotehomeTeam: '0.25',
          coteNull: '2.81',
          coteawayTeam: '3.18',
          lien1: 'https://i.skyrock.net/0705/5300705/pics/2613089914_1.jpg',
          liensAway:
            'https://cdn.footballkitarchive.com/2021/10/10/pzGsAiDj0G2YuWR.jpg',
        },
      ],
    },
    {
      date: '2023-06-21',

      matches: [
        {
          id: 3,
          homeTeam: 'MALI',
          awayTeam: 'NIGER',
          time: '15:00',
          cotehomeTeam: '1.5',
          coteNull: '1.',
          coteawayTeam: '0.14',
          lien1:
            'https://cdn.footballkitarchive.com/2022/02/27/UBbMXkEaf2A2tv1.jpg',
          liensAway:
            'https://cdn.footballkitarchive.com/2022/12/15/vQLTT4c1NWWd6L8.jpg',
        },
      ],
    },
    {
      date: '2023-06-22',

      matches: [
        {
          id: 5,
          homeTeam: 'SENEGAL',
          awayTeam: 'ALGERIE',
          time: '9:00',
          cotehomeTeam: '1.6',
          coteawayTeam: '3.18',
          coteNull: '0.18',
          lien1:
            'https://cdn.footballkitarchive.com/2021/04/09/LxgX3VwjsDoJ1uK.jpg',
          liensAway:
            'https://cdn.footballkitarchive.com/2023/02/13/R9UduMmdg0bMI51.jpg',
        },
      ],
    },
  ];

  // Fonction appelée lorsqu'une date est cliquée
  const handleDatePress = (date: any) => {
    setSelectedDate(date);
    const matchPd = matchData.filter((mat: any) => mat.date === date);

    setMatche(matchPd);
  };
  return (
    <View className="flex-1">
      <Header
        title="Parier pour des lots 🥳"
        showBackIcon
      />

      <ScreenContentLayout>
        <View className="mx-4">
          <View className="mx-auto flex w-full flex-row justify-between pb-2 ">
            <Text className="text-xl font-extrabold">Resumé</Text>
            <AntDesign
              name="delete"
              size={24}
              color="orange"
            />
          </View>
          <View className="m-1 rounded-md bg-white p-2">
            <View>
              <View className="flex w-full flex-row justify-between pb-2">
                <Text className="text-xl font-bold text-black">BENIN-TOGO</Text>
                <AntDesign
                  name="closecircleo"
                  size={15}
                  color="orange"
                  className="text-neutral-500"
                />
              </View>
              <Text className="pb-1 text-neutral-500">
                20 juin 2023 (12:00 GMT)
              </Text>
            </View>
            <View className="mx-auto flex w-11/12 flex-row items-center justify-between rounded-lg bg-gray-300 p-2">
              <Text>1X2: Victoire de équipe 1</Text>
              <Text className="font-bold">0.25</Text>
            </View>
          </View>
          <View className="m-1 rounded-md bg-white p-2">
            <View>
              <View className="flex w-full flex-row justify-between pb-2">
                <Text className="text-xl font-bold text-black">BENIN-TOGO</Text>
                <AntDesign
                  name="closecircleo"
                  size={15}
                  color="orange"
                  className="text-neutral-500"
                />
              </View>
              <Text className="pb-1 text-neutral-500">
                20 juin 2023 (12:00 GMT)
              </Text>
            </View>
            <View className="mx-auto flex w-11/12 flex-row items-center justify-between rounded-lg bg-gray-300 p-2">
              <Text>1X2: Victoire de équipe 1</Text>
              <Text className="font-bold">0.25</Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row items-end justify-between">
          <View className="flex-1 items-center">
            <View className="flex flex-row items-center">
              <SimpleLineIcons
                name="event"
                size={20}
                color="orange"
              />
              <Text className="px-2 text-xl font-semibold">1</Text>
            </View>
            <View>
              <Text className="text-sm font-medium">Évenement(s)</Text>
            </View>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-3xl font-bold text-primary">0.25</Text>
            <Text className="text-sm font-medium">Cote</Text>
          </View>

          <TouchableOpacity className=" m-2 mx-auto h-12  flex-1 flex-row items-center justify-center rounded-md bg-orange-500 p-0.5">
            <Text className="text-xl font-semibold text-white">
              Placer un pari ✅
            </Text>
          </TouchableOpacity>
        </View>
      </ScreenContentLayout>
    </View>
  );
};
