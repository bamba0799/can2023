import React, { useState } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useValidateOTP } from '@hooks/api/auth';
import { AuthStackParamList } from '@navigation/auth/types';
import { useAuthStore } from '@store/auth';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { getUser } from '@api/user';

const OTP: React.FC<NativeStackScreenProps<AuthStackParamList, 'OTP'>> = ({
  navigation,
}) => {
  const [OTP, setOTP] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const { mutateAsync: validateOTP } = useValidateOTP();
  const { TOKEN_KEY, setUser } = useAuthStore((state) => state);
  const { setItem: persistTokens } = useAsyncStorage(TOKEN_KEY);

  const submitHandler = async () => {
    setIsLoggingIn(true);

    if (!OTP) {
      return setIsLoggingIn(false);
    }

    try {
      await validateOTP(
        {
          OTP,
        },
        {
          onSuccess: async (data) => {
            try {
              await persistTokens(JSON.stringify(data));
              const { data: user, status } = await getUser(data.accessToken);

              if (status !== 200) {
                console.log(data);
                setIsLoggingIn(false);
                throw data;
              }

              await setUser(user);
              setIsLoggingIn(false);
            } catch (e: any) {
              setIsLoggingIn(false);
              console.log(e.message);
            }
          },
          onError: (error: any) => {
            setIsLoggingIn(false);
            console.log(error);
            Alert.alert('Erreur lors de la validation', error.message);
          },
        }
      );
    } catch (e: any) {
      setIsLoggingIn(false);
      console.log(e.message);
    }
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="space-y-4">
        <Input
          containerProps={{ className: 'w-[320px]' }}
          textInputProps={{
            value: OTP,
            onChangeText: setOTP,
            keyboardType: 'number-pad',
            placeholder: 'Entrez le code reçu',
            maxLength: 4,
          }}
        />
        <Button
          className={`flex-row items-center justify-center rounded-lg bg-black px-4 py-2 ${
            isLoggingIn || OTP.length !== 4 ? 'bg-orange-300' : 'bg-primary'
          }`}
          onPress={submitHandler}
          disabled={isLoggingIn || OTP.length !== 4}
        >
          {isLoggingIn ? (
            <ActivityIndicator
              size={15}
              className="h-5 w-5"
              color="white"
            />
          ) : (
            <>
              <Text className="text-center font-[semiBold] text-sm text-white">
                Confirmer
              </Text>
              <Ionicons
                name="ios-arrow-forward-outline"
                size={15}
                color="white"
              />
            </>
          )}
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default OTP;
