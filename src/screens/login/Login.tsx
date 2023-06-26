import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ActivityIndicator, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@components/Button';
import { useLogin } from '@hooks/api/auth';
import { AuthStackParamList } from '@navigation/auth/types';
import { StatusBar } from 'expo-status-bar';

const Login: React.FC<NativeStackScreenProps<AuthStackParamList, 'Login'>> = ({
  navigation,
}) => {
  const [phone, setPhone] = useState('');
  const [isNumberLengthCorrect, setisNumberLengthCorrect] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const { mutateAsync: login } = useLogin();

  const changeHandler = (value: string) => {
    setPhone(value);
  };

  const submitHandler = async () => {
    setIsLoggingIn(true);

    if (!phone) {
      return setIsLoggingIn(false);
    }

    try {
      await login(
        {
          contact: phone,
        },
        {
          onSuccess: (data) => {
            setIsLoggingIn(false);
            navigation.navigate('OTP');
          },
          onError: (error: any) => {
            setIsLoggingIn(false);
            console.log(error);
            Alert.alert('Erreur lors de la connexion', error.message);
          },
        }
      );
    } catch (e: any) {
      setIsLoggingIn(false);
      console.log(e.message);
    }
  };

  useEffect(() => {
    setisNumberLengthCorrect(phone.length === 10);
  }, [phone]);

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
              <Text className="font-[bold] text-2xl">Bienvenue à vous</Text>
              <Text className="font-[medium] text-sm">
                Entrez juste votre numéro
              </Text>
            </View>

            <View className="mt-8 space-y-4">
              <View className="flex-row rounded-lg">
                <TextInput
                  className={`flex-1 rounded-lg border border-gray-300 p-3 font-[semiBold] text-base`}
                  value={phone}
                  onChangeText={changeHandler}
                  maxLength={10}
                  placeholder="N° de téléphone ici"
                  textAlignVertical="center"
                  textContentType="telephoneNumber"
                  keyboardType="number-pad"
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

export default Login;
