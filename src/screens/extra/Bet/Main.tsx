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
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import dayjs from 'dayjs';
import { Badge } from '@components/Badge';

export const Main: React.FC<
  NativeStackScreenProps<BetStackParamList, 'Bet/Main'>
> = ({ navigation, route }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  // État pour stocker la date sélectionnée
  const [selectedDate, setSelectedDate] = useState<any>(null);

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
  const [matche, setMatche] = useState<any>(matchData[0].matches);
  console.log(matche);

  // Fonction appelée lorsqu'une date est cliquée
  const handleDatePress = (date: any) => {
    setSelectedDate(date);
    const matchPd = matchData.filter((mat: any) => mat.date === date);
    const mat = matchPd[0].matches;

    setMatche(mat);
  };

  useEffect(() => {
    setSelectedDate(matchData[0].date);
    setMatche(matchData[0].matches);
  }, []);
  return (
    <View className="flex-1">
      <Header
        title="Parier pour des lots 🥳"
        showBackIcon
      />

      <ScreenContentLayout>
        <ScrollView>
          <View className=" flex flex-row justify-between px-3">
            <Text className="text-2xl font-bold"> Matchs </Text>
            <View className="">
              <Pressable className="flex flex-row items-center rounded-full bg-gray-500 p-1">
                <Text className="text-[11px] font-bold text-white">
                  10 Point(s)
                </Text>
                <Feather
                  name="plus-square"
                  size={24}
                  color="white"
                />
              </Pressable>
            </View>
          </View>
          <View className="mx-4">
            <ScrollView
              className="mt-2 w-full "
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                columnGap: 8,
              }}
            >
              {/* Affichage des dates */}

              {matchData.map((matchDate) => (
                <TouchableOpacity
                  key={matchDate.date}
                  activeOpacity={0.7}
                  className={`h-8 w-20 items-center justify-center rounded-full border border-primary px-3  ${
                    matchDate.date === selectedDate
                      ? 'bg-primary'
                      : 'bg-transparent'
                  }`}
                  onPress={() => handleDatePress(matchDate.date)}
                >
                  <Text
                    className={`text-xl font-medium text-primary ${
                      matchDate.date === selectedDate
                        ? 'text-white'
                        : 'text-primary'
                    }`}
                  >
                    {dayjs(matchDate.date).format('DD MMM YY')}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            {/* Affichage des matchs du jour */}
            <View className="items-center py-2">
              <Text className="underlinewq pt-3">
                🎉Coup d'Afrique des Nations
              </Text>
            </View>

            <View className="  w-full  items-center  space-y-6 rounded-xl rounded-t-3xl border-t-8 border-t-orange-500  bg-white py-4">
              {matche.map((ma: any) => (
                <View
                  key={ma.date}
                  className="flex w-full flex-row items-end justify-center"
                >
                  <View className="flex  flex-1 items-center">
                    <Image
                      className="h-10 w-10"
                      source={{
                        uri: `${ma.lien1}`,
                      }}
                    />
                    <Text className=" py-1 font-bold">{ma.homeTeam}</Text>
                    <TouchableOpacity className="w-16 items-center rounded-xl border bg-gray-600 p-2">
                      <Text className="font-extrabold text-white">
                        x{ma.cotehomeTeam}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="flex  flex-1 items-center ">
                    <Text>{ma.time}</Text>
                    <Text className=" py-1 font-bold">Nul</Text>
                    <TouchableOpacity className="w-16 items-center rounded-xl border bg-gray-600 p-2">
                      <Text className="font-extrabold text-white">
                        x{ma.coteNull}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View className="flex  flex-1 items-center">
                    <Image
                      className="h-10 w-10"
                      source={{
                        uri: `${ma.liensAway}`,
                      }}
                    />
                    <Text className=" py-1 font-bold">{ma.awayTeam}</Text>
                    <TouchableOpacity className="w-16 items-center rounded-xl border bg-gray-600 p-2">
                      <Text className="font-extrabold text-white">
                        x{ma.coteawayTeam}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Bet/BetConfirmation')}
              className=" m-2 mx-auto flex h-10 w-24 flex-row items-center justify-center rounded-full bg-orange-500 p-0.5"
            >
              <Text className="text-xl font-bold text-black">validé ✅</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScreenContentLayout>
    </View>
  );
};
