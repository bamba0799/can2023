import React, { useState, useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { dayjs } from '@lib/dayjs';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { HomeTabsParamList } from '@navigation/app/home/types';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { getMatchs } from './api';
import { getMatchsPerDate } from './api';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { ScreenLoader } from '@components/ScreenLoader';

const Matchs: React.FC<
  NativeStackScreenProps<HomeTabsParamList, 'Home/Matchs'>
> = () => {
  const [dates, setDates] = useState<any[]>([]);
  const [matchperdates, setMatchperdates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [isPageLoading, setIsPageLoading] = useState(false);

  async function getAllMatchs() {
    setIsPageLoading(true);

    try {
      const matchs = await getMatchs();
      setDates(matchs);
      setSelectedDate(matchs[0].id);
    } catch (e: any) {
      console.log(e.message);
    } finally {
      setIsPageLoading(false);
    }
  }

  async function getMatchPerDate(date: string, id: number) {
    try {
      const matchsPerDate = await getMatchsPerDate(date);
      setMatchperdates(matchsPerDate);
      setSelectedDate(id);
    } catch (e: any) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    getAllMatchs();
  }, []);

  useEffect(() => {
    if (dates.length > 0) {
      const firstDateId = dates[0].id;
      getMatchPerDate(dates[0].date, firstDateId);
    }
  }, [dates]);

  if (isPageLoading) {
    return <ScreenLoader />;
  }

  return (
    <View className="flex-1">
      <Header title="Matchs" />

      <ScreenContentLayout contentContainerStyle={{}}>
        <ScrollView
          horizontal
          className="mt-4"
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            columnGap: 8,
            paddingHorizontal: 16,
          }}
        >
          {/*  affichage des dates */}
          {dates
            .filter(
              (item, index) =>
                dates.findIndex((date) => date.date === item.date) === index
            )
            .map((daat: any) => (
              <TouchableOpacity
                key={daat.id}
                activeOpacity={0.7}
                className={`rounded-full border border-primary px-3 py-[6px] ${
                  daat.id === selectedDate ? 'bg-primary' : 'bg-transparent'
                }`}
                onPress={() => {
                  getMatchPerDate(daat.date, daat.id);
                }}
              >
                <Text
                  className={`font-medium text-primary ${
                    daat.id === selectedDate ? 'text-white' : 'text-primary'
                  }`}
                >
                  {dayjs(daat.date).format('ddd D MMM')}
                </Text>
              </TouchableOpacity>
            ))}
        </ScrollView>

        <View className="mx-4 mt-6 space-y-6">
          {matchperdates.map((matchperdate: any) => (
            <View
              key={matchperdate.id}
              className="items-center"
            >
              <View className="w-full items-center justify-center rounded-xl bg-white py-4">
                <View className="flex-row">
                  <View className="flex flex-row items-center justify-center">
                    {/* affichage du code pays 1 */}
                    {matchperdate.matchStats.map((stat: any) => {
                      if (
                        stat.team.code == matchperdate.matchStats[0].team.code
                      ) {
                        return (
                          <View
                            className="flex flex-row items-center"
                            key={stat.teamId}
                          >
                            <Text className="font-bold ">{stat.team.code}</Text>
                            <View className="ml-3 h-12 w-12 rounded-full border-2 border-gray-100">
                              <Image
                                source={{ uri: stat.team.flag }}
                                className="h-full w-full rounded-full"
                              />
                            </View>
                          </View>
                        );
                      }
                    })}
                  </View>

                  <View className="flex w-28 items-center justify-center">
                    {/*les buts des equipes*/}
                    <View className="flex-row ">
                      {matchperdate.matchStats.map(
                        (sta: any, index: number) => {
                          if (sta.goal == matchperdate.matchStats[0].goal) {
                            if (index === 0) {
                              return (
                                <Text
                                  key={sta.teamId}
                                  className="text-xl font-bold text-red-800"
                                >
                                  {sta.goal != null ? sta.goal : 'vs'}
                                </Text>
                              );
                            } else return null;
                          }
                        }
                      )}
                      {matchperdate.matchStats.map((st: any) => {
                        if (st.goal !== matchperdate.matchStats[0].goal) {
                          return (
                            <Text
                              key={st.teamId}
                              className="text-xl font-bold text-red-800"
                            >
                              - {st.goal != null ? st.goal : 'vs'}
                            </Text>
                          );
                        }
                      })}
                    </View>
                  </View>

                  <View>
                    <View className="flex-row items-center justify-center">
                      {/* affichage du code pays 2 */}
                      {matchperdate.matchStats.map((stat: any) => {
                        if (
                          stat.team.code !==
                          matchperdate.matchStats[0].team.code
                        ) {
                          return (
                            <View
                              className="flex-row items-center"
                              key={stat.teamId}
                            >
                              <View className="mr-3 h-12 w-12 rounded-full border-2 border-gray-100">
                                <Image
                                  source={{ uri: stat.team.flag }}
                                  className="h-full w-full rounded-full"
                                  resizeMode="cover"
                                />
                              </View>

                              <Text className="font-bold">
                                {stat.team.code}
                              </Text>
                            </View>
                          );
                        }
                        return null;
                      })}
                    </View>
                  </View>
                </View>

                <View className="w-28 items-center">
                  <Text className="text-xs">
                    {matchperdate.matchStatus === 'over'
                      ? 'Terminé'
                      : matchperdate.matchStatus === 'next'
                      ? dayjs(matchperdate.time).format('h:mm')
                      : 'Direct'}
                  </Text>

                  {matchperdate.matchStatus == 'over' ? (
                    <View className="flex-row items-center">
                      <Button className="rounded bg-primary p-0.5">
                        <Ionicons
                          name="ios-play-sharp"
                          color="white"
                          size={12}
                        />
                      </Button>
                      <Text className="ml-1 text-xs font-bold text-primary">
                        Temps fort
                      </Text>
                    </View>
                  ) : (
                    <View className="">
                      <Pressable
                        onPress={() => null}
                        className="mt-5 rounded-full bg-black p-2 px-3"
                      >
                        <Text className="text-[11px] font-bold text-white">
                          Acheter Ticket
                        </Text>
                      </Pressable>
                    </View>
                  )}
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScreenContentLayout>
    </View>
  );
};

export default Matchs;
