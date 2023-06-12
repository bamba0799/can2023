import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ExtraStackParamList } from './types';

// screens
import { Profile } from '@screens/extra/Profile';
import { Main } from '@screens/extra/Main';
import { FavTeams } from '@screens/extra/FavTeams';
import { Stadiums } from '@screens/extra/Stadiums';
import { About } from '@screens/extra/About';

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
        component={Stadiums}
      />
      <Stack.Screen
        name="Extra/About"
        component={About}
      />
      {/* TODO: create these routes */}
      {/* 
        <Stack.Screen
          name="Extra/Tickets"
          component={Tickets}
        />
        <Stack.Screen
          name="Extra/Games"
          component={Games}
        />
      */}
    </Stack.Navigator>
  );
};

export default ExtraStack;
