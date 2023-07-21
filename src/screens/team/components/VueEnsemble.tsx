import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Matchs } from './Matchs';
import { Effectif } from './Effectif';
import { Statistiques } from './Statistiques';
import { BetConfirmation } from '@screens/extra/Bet/BetConfirmation';
import { BetStack } from '@screens/extra/Bet';
import axios from 'axios';
import { API_BASE_URL } from '@env';
import dayjs from 'dayjs';
type PropEffectif = {
  name: string;
  teamId: string;
};

type PropVue = {
  name: string;
  teamId: string;
};

const VueEnsemble: React.FC<PropVue> = ({ name, teamId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les données de l'API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/players?idCountry=${teamId}`
        );

        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchData();
  }, [teamId]);

  return (
    <ScrollView>
      <View>
        <Matchs name={'Matchs'}></Matchs>
        <Effectif
          name="Effectif"
          teamId="teamId"
        ></Effectif>
        <View className="mx-auto w-96 rounded-xl bg-[#E5E5E5] py-2">
          <View className="w-96">
              <View className="flex-row justify-evenly items-center px-4 ">
                {data.slice(0, 3).map((player: any) => (
                  <View
                    key={player.id}
                    className=" align-start mx-auto item-center"
                  >
                    <Image
                      source={{ uri: player.image }}
                      className=" h-12 w-12 rounded-full border"
                    />
                    <Text className="h-4 w-16 text-xs font-semibold">
                      {player.name}
                    </Text>
                    <Text className="">{player.position}</Text>
                  </View>
                ))}
              </View>
          </View>
        </View>

        <Statistiques name="Statistiques"></Statistiques>
      </View>
    </ScrollView>
  );
};

export { VueEnsemble };
