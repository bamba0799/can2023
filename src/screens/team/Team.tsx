import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { useRoute } from '@react-navigation/native';
import { VueEnsemble } from './components/VueEnsemble';
import { Matchs } from './components/Matchs';
import {Effectif} from './components/Effectif'
import { Statistiques } from './components/Statistiques';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Header } from '@components/Header';
import React, { useEffect, useState } from 'react';
import { Badge } from '@components/Badge';

export default function Team() {
  const { params: team } = useRoute();

  const {
    name: team_name,
    code: team_code,
    flag: team_flag,
    group: team_group,
    players: team_players,
  } = team as any;

  const onglet = [
    { name: "Vue d'ensemble" },
    { name: 'Matchs' },
    { name: 'Effectif' },
    { name: 'Statistiques' },
  ];

  const [selectedOnglet, setSelectedOnglet] = useState<any>(onglet[0]);
  console.log(selectedOnglet);

    return (
      <View className="flex-1">
        <Header
          title={team_name}
          showProfile={false}
          showBackIcon
        />

        <View className="">
          <ImageBackground
            className="h-36 w-full object-cover object-center opacity-30"
            source={{
              uri: team_flag,
            }}
          />
          <View className="absolute items-center left-40 top-11 flex flex-col justify-center bg-orange-200 p-2 text-white">
            <Text className="text-white">{team_name}</Text>
            <Text className="uppercase text-white">
              Groupe {team_group.label}
            </Text>
          </View>
        </View>
        <View className="mt-3 w-full ">
          <ScrollView
            className=""
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              columnGap: 8,
            }}
          >
            {onglet.map((ong: any) => (
              <TouchableOpacity
                onPress={() => setSelectedOnglet(ong)}
                className={`ml-1 rounded-full border border-primary px-3 py-[6px] ${
                  ong.name == selectedOnglet.name
                    ? 'bg-primary'
                    : 'bg-transparent'
                }`}
              >
                <Text
                  className={`font-medium ${
                    ong.name === selectedOnglet.name
                      ? 'text-white'
                      : 'text-primary'
                  }`}
                >
                  {ong.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View>
          {
            selectedOnglet.name === "Vue d'ensemble" ?<VueEnsemble name="Vue d'ensemble" /> :
            selectedOnglet.name === "Matchs" ? <Matchs name="Matchs"/>:
            selectedOnglet.name === "Effectif" ? <Effectif name="Effectifs"/> :<Statistiques name='PropStatistique'/>
          }
        </View>
      </View>
    );

 
}
