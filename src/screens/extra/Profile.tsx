import { useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity, Image} from 'react-native';
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
import { FontAwesome5 } from '@expo/vector-icons'; 


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

  const datas = [
    {
      id:1,
      label:"Mes points",
      icon:"coins",
      iconColor:"rgba(255, 165, 0, 70)",
      iconBgColor:"bg-orange-100"
    },
    {
      id:2,
      label:"Mes tickets",
      icon:"ticket-alt",
      iconColor:"rgba(119, 163, 69, 0.5)",
      iconBgColor:"bg-green-100"
    },
    {
      id:3,
      label:"Editer profile",
      icon:"user-edit",
      iconColor:"rgb(30,144,255)",
      iconBgColor:"bg-blue-100"
    }
  ]

  return (
    <View className="flex-1 ">
      <Header
        title="Profile"
        showBackIcon
        onNavigateBack={() => navigation.navigate('Extra/Main')}
      />

      <ScreenContentLayout className=''>
        <View className=''>
          <View className='  items-center justify-center h-52'>
            <View style={styles.profilecard} className='bg-slate-300 items-center justify-center'>
              <Image style={styles.profilePhoto} className='rounded-full' source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}/>
            </View>
            <Text className='text-2xl font-semibold'>{user?.firstName }{user?.lastName}</Text>
          </View>
          {/* <View>
            <Text>Id: {user!.id}</Text>
          </View>

          <View>
            <Text>N° de téléphone: {user!.contact}</Text>
          </View> */}
        <View className='bg-white  rounded-t-3xl h-full'>
          {datas.map((data:any) => (
              <TouchableOpacity key={data.id} activeOpacity={0.7} className='flex px-4 flex-row items-center justify-between mt-5'>
              <View className='flex flex-row items-center mr-14 w-52'>
                <View className={`${data.iconBgColor} rounded-2xl w-12 h-12 items-center justify-center space-x-3`}>
                  <FontAwesome5 name={data.icon} size={23} style={{color:data.iconColor}}/>
                </View>
                <Text className='font-[medium] text-lg ml-10'>{data.label}</Text>
              </View>
              
              <Button className=" rounded-full bg-[#EFEFEF] p-2">
                  <Ionicons
                    name={"ios-arrow-forward-sharp"}
                    size={20}
                  />
              </Button>
            </TouchableOpacity>
          ))
            }
          <Button className={` h-10 rounded-xl mt-10 px-4 py-1 ${isLoggingOut ? 'bg-black/60' : 'bg-black'}`} 
            onPress={logout}
            disabled={isLoggingOut}>
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
        </View>
        
        </View >
      </ScreenContentLayout>
    </View>
  );
};

export { Profile };


const styles = StyleSheet.create({
  coinColor:{
    color:'rgba(255, 165, 0, 70)',  
  },
  ticketColor:{
    color:'rgba(119, 163, 69, 0.5)'
  },
  profilecard:{
    width: 100,
    height: 100,
    borderRadius:100,
  },
  profilePhoto:{
    width: 90,
    height: 90,
  }
})
