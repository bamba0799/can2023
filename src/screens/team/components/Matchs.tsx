import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { POICard } from '@screens/goodDeals/components/POICard';
import { useRoute } from '@react-navigation/native';
import { API_BASE_URL } from '@env';
import axios from 'axios';
import dayjs from 'dayjs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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

  // const [dates, setDates] = useState<any[]>([]);
  // const [matchperdates, setMatchperdates] = useState([]);
  // const [selectedDate, setSelectedDate] = useState(0);
  // const [isLoading, setIsLoading] = useState<boolean>(true)
  // dayjs.locale("fr");
  // const insets = useSafeAreaInsets();

// const getMatchPerDateAndTeam = (date: string, id: number, teamCode: string) => {
//   axios
//     .get(`${API_BASE_URL}/matchs?date=${date}`)
//     .then((res) => {
//       const matchesForTeam = res.data.filter((match: any) => {
//         // Assuming you have the team code in the 'team' object
//         return (
//           match.matchStats.findIndex(
//             (stat: any) => stat.team.code === teamCode
//           ) !== -1
//         );
//       });
//       setMatchperdates(matchesForTeam);
//       setSelectedDate(id);
//       setIsLoading(false);
//     })
//     .catch((err) => console.log(err));
// };



  return (
    <View className='mx-4 mt-4' >
      <View className='items-center  w-96 flex flex-row justify-between'>
        <Text className='font-[extraBold] text-lg text-primary'>{name}</Text>
          <TouchableOpacity  
                  activeOpacity={0.7}
                  className={"h-6 w-18 items-center justify-center rounded-full px-3 bg-gray-200"}
            >
              <Text className='text-l font-normal text-gray'>Voir plus</Text>
          </TouchableOpacity>
      </View>


       <View  className="" >
       <View className="w-96 items-center justify-center rounded-xl bg-[#E5E5E5] py-4">
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
