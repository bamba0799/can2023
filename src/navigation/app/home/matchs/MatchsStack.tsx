import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MatchsStackParamList } from './types';

import {Main} from '@screens/matchs/Main'
import MatchsBuyTicket from '@screens/matchs/MatchsAction/MatchsBuyTicket'
import {PaymentPaypalSuccess} from '@screens/matchs/MatchsAction/PaymentPaypalSuccess'
import {PaymentPaypalOnWeb} from '@screens/matchs/MatchsAction/PaymentPaypalOnWeb'
import {PaymentOrangeOnWeb} from '@screens/matchs/MatchsAction/PaymentOrangeOnWeb'


const Stack = createNativeStackNavigator<MatchsStackParamList>()

const MatchsStack = () => {
  return(
    <Stack.Navigator
    initialRouteName='Matchs/Main'
    screenOptions={{ headerShown: false }}
    >
    <Stack.Screen name='Matchs/Main' component={Main}/>
    <Stack.Screen name='Matchs/MatchsBuyTicket' component={MatchsBuyTicket}/>
    <Stack.Screen name='Matchs/MatchsActions/PaymentPaypalConfirmation' component={PaymentPaypalSuccess}/>
    <Stack.Screen name='Matchs/MatchsActions/PaymentPaypalOnWeb' component={PaymentPaypalOnWeb}/>
    <Stack.Screen name='Matchs/MatchsActions/PaymentOrangeOnWeb' component={PaymentOrangeOnWeb}/>
    </Stack.Navigator>
  )
}
export default MatchsStack

