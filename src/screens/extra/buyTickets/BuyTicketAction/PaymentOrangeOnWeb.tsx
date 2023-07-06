import { View } from 'react-native'
import React from 'react'
import WebView from "react-native-webview";
import { Header } from "@components/Header";
import { useRoute } from "@react-navigation/native";
import queryString from "query-string";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BuyTicketsStackParamList } from '../../../../navigation/app/home/buyTickets/types';


const PaymentOrangeOnWeb:React.FC<NativeStackScreenProps <BuyTicketsStackParamList, "BuyTickets/BuyTicketAction/PaymentOrangeOnWeb">> = ({navigation}) => {

  const data = useRoute().params as any
  const orangeMoneyUrl = data.url
  console.log(orangeMoneyUrl);

  const cancel = () => {
    navigation.navigate('Extra/Main')
    console.log("retour")
  }
  
  const onUrlChangeOrange = (webviewState: any) => {
    console.log("le webviewState est", webviewState)
    if (webviewState.url.includes("https://example.com/cancel")){
      console.log("retour");
      
    }
    else if (webviewState.url.includes("https://example.com/return")){
      const urlValues = queryString.parseUrl(webviewState.url)
      const { token } = urlValues.query
      // paymentSucess(token, accessTokenPaypal).then(res => console.log("la reponse final est ", res))
      // navigation.navigate('Matchs/MatchsActions/PaymentPaypalConfirmation', {quantityOfTicket:quantityOfTicket})
      
    }
  }
  return (
    <View className='flex-1'>
      <Header showBackIcon onNavigateBack={cancel} showProfile={false} title={""}/>
      <View className='flex-1' >
        <View className="flex-1">
          <WebView source={{ uri: orangeMoneyUrl}} onNavigationStateChange={onUrlChangeOrange}/>
        </View>
      </View>
    </View>
  )
}
export  {PaymentOrangeOnWeb}
