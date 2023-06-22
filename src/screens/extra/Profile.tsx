import { useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ExtraStackParamList } from '@navigation/app/home/extra/types';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { useHideBottomTab } from '@hooks/navigation';
import { useAuthStore } from '@store/auth';
import { Button } from '@components/Button';
import { Center } from '@components/Center';
import { Header } from '@components/Header';

const Profile: React.FC<
  NativeStackScreenProps<ExtraStackParamList, 'Extra/Profile'>
> = ({ navigation, route }) => {
  useHideBottomTab();
  const { user, TOKEN_KEY, setUser } = useAuthStore((state) => state);
  const [isLoggingOut, setisLoggingOut] = useState(false);

  const logout = async () => {
    setisLoggingOut(true);

    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
      await setUser(null);
      setisLoggingOut(false);
      navigation.navigate('Login' as never);
    } catch (e: any) {
      setisLoggingOut(false);
      console.log(e);
    }
  };

  return (
    <View className="flex-1">
      <Header
        title="Profile"
        showBackIcon
        onNavigateBack={() => navigation.navigate('Extra/Main')}
      />

      <ScreenContentLayout>
        <View>
          <View>
            <Text>Id: {user!.id}</Text>
          </View>

          <View>
            <Text>N° de téléphone: {user!.contact}</Text>
          </View>
        </View>

        <Button
          className={`mt-4 h-10 rounded-xl  px-4 py-1 ${
            isLoggingOut ? 'bg-black/60' : 'bg-black'
          }`}
          onPress={logout}
          disabled={isLoggingOut}
        >
          <Center className="flex-row">
            {isLoggingOut ? (
              <ActivityIndicator size={20} />
            ) : (
              <>
                <Text className="mr-2 font-[medium] text-sm text-white">
                  Déconnexion
                </Text>
                <Ionicons
                  name="ios-log-out-outline"
                  size={16}
                  color="white"
                />
              </>
            )}
          </Center>
        </Button>
      </ScreenContentLayout>
    </View>
  );
};

export { Profile };
