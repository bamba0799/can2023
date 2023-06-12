import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from './types';

// screens
import { Main } from '@screens/home/Main';
import { Story } from '@screens/home/Story';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home/Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Home/Main"
        component={Main}
      />
      <Stack.Screen
        name="Home/Story"
        component={Story}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
