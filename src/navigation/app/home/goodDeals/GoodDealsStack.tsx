import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GoodDealsStackParamList } from './types';

// screens
import { Main } from '@screens/goodDeals/Main';
import { Details } from '@screens/goodDeals/Details';

const Stack = createNativeStackNavigator<GoodDealsStackParamList>();

const ExtraStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="GoodDeals/Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="GoodDeals/Main"
        component={Main}
      />
      <Stack.Screen
        name="GoodDeals/Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default ExtraStack;
