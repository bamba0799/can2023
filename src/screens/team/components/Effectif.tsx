import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import axios from 'axios';
import { API_BASE_URL } from '@env';
import dayjs from 'dayjs';
type PropEffectif = {
  name: string;
  teamId: string
};

const Effectif: React.FC<PropEffectif> = ({ name, teamId }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les données de l'API
    const fetchData = async () => {
      try {
          const response = await axios
          .get(`${API_BASE_URL}/players?idCountry=${teamId}`) 
        
        setData(response.data); 
        console.log(response.data)
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchData();
  }, [teamId]);

  return (
    <View className='mx-4 mt-4'>
        <View className='items-center  w-96 flex flex-row justify-between'>
          <Text className='font-[extraBold] text-lg text-primary'>{name}</Text>
         
      </View>
       <ScrollView  className=''>
        <View className="py-2 flex flex-row flex-wrap ">
            {data.map(( player : any) => (
              <View
              key={player.id}
              className=''
              >
                <View className='flex flex-row  justify-start items-center w-96 border-b-2 border-orange-100/100 py-2'>
                  <View className='mx-6 justify-start  w-1/6'>
                      <Text className=''>N°{player.shirtNumber}</Text>
                  </View>
                  <View className='mr-6justify-start'>
                   <Image source={{ uri: player.image }} className=" h-12 w-12 mr-4 rounded-full  border" />
                  </View>
                  <View>
                    <Text className='font-semibold w-15 text-xs'>{player.name}</Text>
                    <Text className='w-15 text-xs'>{player.position}</Text>
                    <Text className='font-extralight w-15 text-xs'>birthday: {dayjs(player.birthday).format('DD MMM YYYY')} </Text>
                  </View>
               </View>
              {/* <View className=' rounded-full    mx-auto'>
                <Image source={{ uri: player.image }} className=" h-12 w-12 rounded-full  border" />
                <Text className='font-semibold w-15 text-xs'>{player.name}</Text>
           <Text className=''>N°{player.shirtNumber}</Text>
                  <Text className=''>{player.position}</Text>


              </View> */}
          </View>
          ))}
      </View>
         </ScrollView >

      
    </View>
  );
};


export  {Effectif}

function useRoute(): { params: any; } {
    throw new Error('Function not implemented.');
  }

