import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BuyTicketsStackParamList } from './types';

// screens
import { Main } from '@screens/extra/buyTickets/Main';

const Stack = createNativeStackNavigator<BuyTicketsStackParamList>();

const BuyTicketsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="BuyTickets/Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="BuyTickets/Main"
        component={Main as any}
      />
    </Stack.Navigator>
  );
};

export default BuyTicketsStack;
