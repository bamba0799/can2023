import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { AppState, AppStateStatus, Platform } from 'react-native';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  QueryClientProvider,
  QueryClient,
  focusManager,
} from '@tanstack/react-query';
import * as SplashScreen from 'expo-splash-screen';
import { useAuthStore } from '@store/auth';
import { useLoadFont } from '@hooks/fonts';
import { APP_FIRST_LAUNCH } from '@env';
import { getUser } from '@api/user';

// stacks & screens
import { AppStack } from '@navigation/app';
import { AuthStack } from '@navigation/auth';
import { Intro } from '@screens/intro';

// keep the splash screen visible while we load resources
SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

const App = () => {
  const { user, setUser, TOKEN_KEY } = useAuthStore((state) => state);
  const [fontsLoaded] = useLoadFont();
  const [showIntro, setShowIntro] = useState(false);
  const { getItem, setItem, removeItem } = useAsyncStorage(APP_FIRST_LAUNCH);
  const [isAppLoading, setIsAppLoading] = useState(false);
  const [isGettingUser, setIsGettingUser] = useState(false);

  const fetchUser = async () => {
    setIsGettingUser(true);
    console.log('Fetching user...');

    try {
      // Get accessToken
      const tokensAsString = await AsyncStorage.getItem(TOKEN_KEY);
      let tokens: any;

      if (tokensAsString == null) {
        console.log('No token in storage');
        return setIsGettingUser(false);
      }

      tokens = JSON.parse(tokensAsString);

      const { data, status } = await getUser(tokens.accessToken);

      if (status !== 200) {
        setIsGettingUser(false);
        throw data;
      }

      await setUser(data);
      setIsGettingUser(false);
    } catch (e: any) {
      setIsGettingUser(false);
      console.log(e.message);
    }
  };

  const checkIfAPPHasAlreadyBeenLaunched = async () => {
    setIsAppLoading(true);

    try {
      const alreadyBeenLaunched = await getItem();

      if (alreadyBeenLaunched == null) {
        setShowIntro(true);
        await setItem('1');
      }

      // await removeItem(); // Remove that later
      setIsAppLoading(false);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const hidSplashScreen = async () => {
    await SplashScreen.hideAsync();
  };

  const onAppStateChange = (status: AppStateStatus) => {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(status === 'active');
    }
  };

  useEffect(() => {
    checkIfAPPHasAlreadyBeenLaunched();
    fetchUser();

    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => subscription.remove();
  }, []);

  useEffect(() => {
    let timerId: number;

    if (fontsLoaded) {
      timerId = setTimeout(() => {
        hidSplashScreen();
      }, 1000);
    }

    return () => clearTimeout(timerId);
  }, [fontsLoaded]);

  if (!fontsLoaded || isAppLoading || isGettingUser) {
    return null;
  }

  if (showIntro) {
    return (
      <>
        <Intro onHide={() => setShowIntro(false)} />
        <StatusBar style="inverted" />
      </>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          {user ? <AppStack /> : <AuthStack />}
        </SafeAreaProvider>
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
