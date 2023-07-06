import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from "@react-navigation/native";
import WebView from "react-native-webview";
import queryString from "query-string";
import { Header } from "@components/Header";
import {paymentSucess} from "../../../../../src/api/paypal"
import { BuyTicketsStackParamList } from '../../../../navigation/app/home/buyTickets/types';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const PaymentPaypalOnWeb: React.FC<NativeStackScreenProps<BuyTicketsStackParamList, "BuyTickets/BuyTicketAction/PaymentPaypalOnWeb">> = ({navigation}) => {
  const data =  useRoute().params as any
  const paypalUrl = data.url
  const accessTokenPaypal = data.accessTokenPaypal
  const quantityOfTicket = data.quantityOfTicket
  console.log(data);

  const onUrlChangePaypal = (webviewState: any) => {
      console.log("le webviewState est", webviewState)
      if (webviewState.url.includes("https://example.com/cancel")){
        console.log("retour");
      }
      else if (webviewState.url.includes("https://example.com/return")){
        const urlValues = queryString.parseUrl(webviewState.url)
        const { token } = urlValues.query
        paymentSucess(token, accessTokenPaypal).then((res:any) => console.log("la reponse final est ", res))
        navigation.navigate('BuyTickets/BuyTicketAction/PaymentPaypalSuccess', {quantityOfTicket:quantityOfTicket})
        
      }
    }

  return (
    <View className='flex-1'>
       <Header showBackIcon  showProfile={false} title={""}/>
        <View className='flex-1' >
          <View className="flex-1">
            <WebView source={{ uri:paypalUrl}}  onNavigationStateChange={onUrlChangePaypal}/>
          </View>
        </View>
    </View>
  )
}

export  {PaymentPaypalOnWeb}
