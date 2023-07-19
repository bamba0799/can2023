import { View, Text,Image } from 'react-native'
import React from 'react'
import { POICard } from '@screens/goodDeals/components/POICard';
import { useRoute } from '@react-navigation/native';
type PropMatch = {
  name: string;
}; 

const Matchs: React.FC<PropMatch> = ({ name }) => {
  const { params: teams } = useRoute();

  const {
    name: team_name,
    code: team_code,
    flag: team_flag,
    group: team_group,
    players: team_players,
  } = teams as any;


  return (
    <View className='mt-4' >
      <Text className='font-[extraBold] text-lg text-primary'>{name}</Text>
       <View  className="mt-4 items-center" >
       <View className="w-96 items-center justify-center rounded-xl bg-white py-4">
          <View className="flex-row">
            <View className="flex flex-row items-center justify-center">
              
              <View className="flex flex-row items-center" >
                <Text className="font-bold ">{team_code}</Text>
                <Image source={{ uri: team_flag }} className="ml-3 h-12 w-12 rounded-full" />
              </View>
               <View className="flex w-28 items-center justify-center">
                    {/*les buts des equipes*/}
                <View className="flex-row ">
                  <Text className="text-xl font-bold text-red-800" > 1 : 0</Text>
                </View>
              </View>
               <Text className="font-bold ">{team_code}</Text>

               <Image source={{uri: team_flag}} className="ml-3 h-12 w-12 rounded-full" />
                            
            </View>
          </View>
      </View>
      </View>

    </View>
  );
};

export  {Matchs}