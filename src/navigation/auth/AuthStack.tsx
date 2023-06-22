import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from './types';

// screens
import { Login } from '@screens/login';
import { Register } from '@screens/register';
import { OTP } from '@screens/otp';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="OTP"
        component={OTP}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
