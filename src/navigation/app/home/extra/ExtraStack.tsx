import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExtraStackParamList } from './types';

// screens
import { Profile } from '@screens/extra/Profile';
import { Main } from '@screens/extra/Main';
import { FavTeams } from '@screens/extra/FavTeams';
import { About } from '@screens/extra/About';
import { StadiumsStacks } from '../stadiums';
import { BuyTicketsStack } from '../buyTickets';
import Game from '@screens/extra/Game';

const Stack = createNativeStackNavigator<ExtraStackParamList>();

const ExtraStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Extra/Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Extra/Main"
        component={Main}
      />
      <Stack.Screen
        name="Extra/Profile"
        component={Profile}
      />
      <Stack.Screen
        name="Extra/FavTeams"
        component={FavTeams}
      />
      <Stack.Screen
        name="Extra/Stadiums"
        component={StadiumsStacks}
      />
      <Stack.Screen
        name="Extra/About"
        component={About}
      />
      <Stack.Screen
<<<<<<< src/navigation/app/home/extra/ExtraStack.tsx
        name="Extra/Game"
        component={Game}
=======
        name="Extra/BuyTickets"
        component={BuyTicketsStack}
>>>>>>> src/navigation/app/home/extra/ExtraStack.tsx
      />
    </Stack.Navigator>
  );
};

export default ExtraStack;