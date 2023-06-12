import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types';

// stacks
import { HomeTabs } from './home';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
