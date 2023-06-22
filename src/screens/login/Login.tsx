import React, { useState } from 'react';
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useLogin } from '@hooks/api/auth';
import { AuthStackParamList } from '@navigation/auth/types';

const Login: React.FC<NativeStackScreenProps<AuthStackParamList, 'Login'>> = ({
  navigation,
}) => {
  const [phone, setPhone] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);
  const { mutateAsync: login } = useLogin();

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
            console.log(data);
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

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="space-y-4">
        <Input
          containerProps={{ className: 'w-[320px]' }}
          textInputProps={{
            value: phone,
            onChangeText: setPhone,
            keyboardType: 'number-pad',
            placeholder: 'Entrez votre numéro',
            maxLength: 10,
          }}
        />
        <Button
          className={`flex-row items-center justify-center rounded-lg px-4 py-2 ${
            isLoggingIn || phone.length !== 10 ? 'bg-orange-300' : 'bg-primary'
          }`}
          disabled={isLoggingIn || phone.length !== 10}
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
    </SafeAreaView>
  );
};

export default Login;
