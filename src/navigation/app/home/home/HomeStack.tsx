import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from './types';

// screens
import { Main } from '@screens/home/Main';
import { StoryView } from '@screens/home/Story';

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
        component={StoryView}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
