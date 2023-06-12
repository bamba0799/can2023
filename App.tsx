import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AppState, AppStateStatus, Platform } from 'react-native';
import {
  QueryClientProvider,
  QueryClient,
  focusManager,
} from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { useAuthStore } from '@store/auth';
import { useLoadFont } from '@hooks/fonts';

// stacks
import { AppStack } from '@navigation/app';
import { AuthStack } from '@navigation/auth';

// keep the splash screen visible while we load resources
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const App = () => {
  const authStore = useAuthStore((state) => state);
  const [fontsLoaded] = useLoadFont();

  const onAppStateChange = (status: AppStateStatus) => {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => subscription.remove();
  }, []);

  const hidSplashScreen = async () => {
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    let timerId: number;

    if (fontsLoaded) {
      timerId = setTimeout(() => {
        hidSplashScreen();
      }, 1500);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {authStore.user ? <AppStack /> : <AuthStack />}
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
