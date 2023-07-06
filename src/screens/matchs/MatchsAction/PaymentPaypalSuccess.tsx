import { View, Text, Pressable } from 'react-native'
import { Button } from '@components/Button';
import React from 'react'
import { useRoute } from "@react-navigation/native"; 
import { Ionicons } from '@expo/vector-icons';
import { generatePdf} from "../api/index";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MatchsStackParamList } from "@navigation/app/home/matchs/types";
const PaymentPaypalSuccess: React.FC<NativeStackScreenProps<MatchsStackParamList, "Matchs/MatchsActions/PaymentPaypalConfirmation">> = ({navigation}) => {

  const data = useRoute().params as any
  const quantityOfTicket = data.quantityOfTicket

  return (
        <View className='flex-1'>
            <View className="flex-1 items-center justify-center">
                <Text className="font-bold text-black" style={{ fontSize: 24 }}>Achat effectué avec succès</Text>
              <View className="mt-5 flex-row space-x-3">
                <Button onPress={() => generatePdf(quantityOfTicket)} className="bg-black rounded-3xl items-center justify-center p-1" >
                  <Text className="font-semibold text-white"> Voir le ticket </Text>
                </Button>
                <View>
                  <Pressable onPress={() => navigation.navigate('Home/Home')} className="self-start rounded-full bg-gray-200 px-2 py-2" >
                    <Ionicons color={"black"} name="ios-home-outline" size={24}  />
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
  )
}

export  {PaymentPaypalSuccess}

