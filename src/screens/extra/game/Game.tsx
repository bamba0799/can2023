import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Welcome } from './Welcome';
import { Timer } from './Timer';
import { Quiz } from './Quiz';
import { Result } from './Result';

const Stack = createNativeStackNavigator();

function Game() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Game/Main"
        component={Welcome}
      />
      <Stack.Screen
        name="Game/Timer"
        component={Timer}
      />
      <Stack.Screen
        name="Game/Quiz"
        component={Quiz}
      />
      <Stack.Screen
        name="Game/Result"
        component={Result}
      />
    </Stack.Navigator>
  );
}

export default Game;
