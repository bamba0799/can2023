import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StadiumsParamList } from './types';

// screens
import { Main } from '@screens/extra/stadiums/Main';
import { StadiumDetails } from '@screens/extra/stadiums/Details';

const Stack = createNativeStackNavigator<StadiumsParamList>();

function StadiumsStacks() {
  return (
    <Stack.Navigator
      initialRouteName="Stadium/Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Stadium/Main"
        component={Main}
      />
      <Stack.Screen
        name="Stadium/Details"
        component={StadiumDetails}
      />
    </Stack.Navigator>
  );
}

export default StadiumsStacks;
