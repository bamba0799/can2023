import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BuyTicketsStackParamList } from './types';


// screens
import { Main } from '@screens/extra/buyTickets/Main';
import {PaymentPaypalSuccess} from '../../../../screens/extra/buyTickets/BuyTicketAction/PaymentPaypalSuccess'
import {PaymentOrangeOnWeb} from '../../../../screens/extra/buyTickets/BuyTicketAction/PaymentOrangeOnWeb'
import {PaymentPaypalOnWeb} from '../../../../screens/extra/buyTickets/BuyTicketAction/PaymentPaypalOnWeb'

const Stack = createNativeStackNavigator<BuyTicketsStackParamList>();

const BuyTicketsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BuyTickets/Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BuyTickets/Main" component={Main as any}/>
      <Stack.Screen name="BuyTickets/BuyTicketAction/PaymentOrangeOnWeb"  component={PaymentOrangeOnWeb}/>
      <Stack.Screen name="BuyTickets/BuyTicketAction/PaymentPaypalOnWeb"  component={PaymentPaypalOnWeb}/>
      <Stack.Screen name="BuyTickets/BuyTicketAction/PaymentPaypalSuccess"  component={PaymentPaypalSuccess}/>
    </Stack.Navigator>
  );
};

export default BuyTicketsStack;
