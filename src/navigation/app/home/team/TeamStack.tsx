import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import { Team } from '@screens/team';

const Stack = createNativeStackNavigator();

const TeamStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Team/Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Team/Main"
        component={Team}
      />
    </Stack.Navigator>
  );
};

export default TeamStack;
