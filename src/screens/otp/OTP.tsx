import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ActivityIndicator, TextInput } from 'react-native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useValidateOTP } from '@hooks/api/auth';
import { AuthStackParamList } from '@navigation/auth/types';
import { useAuthStore } from '@store/auth';
import { Button } from '@components/Button';
import { getUser } from '@api/user';

const OTP_MAX_LENGTH = 4;

const OTP: React.FC<NativeStackScreenProps<AuthStackParamList, 'OTP'>> = ({
  navigation,
}) => {
  const [OTP, setOTP] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const [isNumberLengthCorrect, setisNumberLengthCorrect] = useState(false);
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

  useEffect(() => {
    setisNumberLengthCorrect(OTP.length === OTP_MAX_LENGTH);
  }, [OTP]);

  return (
    <>
      <SafeAreaView className="flex-1 bg-white px-4">
        <View className="mt-20">
          <View>
            <Text className="text-center font-[extraBold] text-4xl">
              <Text className="text-primary">Fan</Text>
              <Text>Xp</Text>
            </Text>
          </View>

          <View className="mt-10">
            <View className="items-center space-y-2">
              <Text className="font-[bold] text-2xl">
                Encore une dernière étape 🏁
              </Text>
              <Text className="font-[medium] text-sm">
                Saisisez le code reçu
              </Text>
            </View>

            <View className="mt-8 space-y-4">
              <View className="flex-row rounded-lg">
                <TextInput
                  className={`flex-1 rounded-lg border border-gray-300 p-3 font-[semiBold] text-base`}
                  value={OTP}
                  onChangeText={setOTP}
                  maxLength={OTP_MAX_LENGTH}
                  placeholder="Entrez le code à 4 chiffres ici"
                  textAlignVertical="center"
                  textContentType="oneTimeCode"
                  verticalAlign="middle"
                  clearButtonMode="while-editing"
                />
              </View>
              <Button
                className={`flex-row items-center justify-center rounded-lg px-4 py-3 ${
                  isLoggingIn || !isNumberLengthCorrect
                    ? 'bg-[#999]'
                    : 'bg-primary'
                }`}
                disabled={isLoggingIn || !isNumberLengthCorrect}
                onPress={submitHandler}
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
                      Suivant
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
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="dark" />
    </>
  );
};

export default OTP;
