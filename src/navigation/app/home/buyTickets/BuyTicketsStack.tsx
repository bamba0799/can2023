import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { BuyTicketsStackParamList } from './types';
import { ExtraStackParamList } from '../extra/types';

// screens
import { Main } from '@screens/extra/buyTickets/Main';

const Stack = createNativeStackNavigator<BuyTicketsStackParamList>();

const BuyTicketsStack: React.FC<
  NativeStackScreenProps<ExtraStackParamList, 'Extra/BuyTickets'>
> = ({ route }) => {
  return (
    <Stack.Navigator
      initialRouteName="BuyTickets/Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="BuyTickets/Main"
        component={Main as any}
      />
      {/* 
        <Stack.Screen
          name="BuyTickets/..."
          component={() => null}
        /> 
      */}
    </Stack.Navigator>
  );
};

export default BuyTicketsStack;
