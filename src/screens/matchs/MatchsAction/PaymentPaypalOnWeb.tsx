import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import WebView from 'react-native-webview';
import queryString from 'query-string';
import { MatchsStackParamList } from '@navigation/app/home/matchs/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { paymentSucess } from '@api/paypal';
import { Header } from '@components/Header';

const PaymentPaypalOnWeb: React.FC<
  NativeStackScreenProps<
    MatchsStackParamList,
    'Matchs/MatchsActions/PaymentPaypalOnWeb'
  >
> = ({ navigation }) => {
  const data = useRoute().params as any;

  let paypalUrl: any = data.url;
  const quantityOfTicket = data.quantityOfTicket;
  const accessTokenPaypal = data.accessToken;

  const cancel = () => {
    navigation.navigate('Matchs/Main');
    paypalUrl = null;
  };

  const onUrlChangePaypal = (webviewState: any) => {
    console.log('WebviewState: ', webviewState);

    if (webviewState.url.includes('https://example.com/cancel')) {
      cancel();
    } else if (webviewState.url.includes('https://example.com/return')) {
      const urlValues = queryString.parseUrl(webviewState.url);
      const { token } = urlValues.query;
      paymentSucess(token, accessTokenPaypal).then((res) =>
        console.log('Reponse finale: ', res)
      );
      navigation.navigate('Matchs/MatchsActions/PaymentPaypalConfirmation', {
        quantityOfTicket: quantityOfTicket,
      });
    }
  };

  return (
    <View className="flex-1">
      <Header
        showBackIcon
        onNavigateBack={cancel}
        showProfile={false}
        title={''}
      />
      <View className="flex-1">
        <View className="flex-1">
          <WebView
            source={{ uri: paypalUrl }}
            onNavigationStateChange={onUrlChangePaypal}
          />
        </View>
      </View>
    </View>
  );
};
export { PaymentPaypalOnWeb };
