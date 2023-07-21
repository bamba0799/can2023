import { View, Text,StyleSheet,TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
// import CountDown from 'react-native-countdown-component';


type PropStatistique = {
  name: string;
};
const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying
    duration={60}
    initialRemainingTime={15}
    colors="#A30000"
  >
        {({ remainingTime }) => <Text>{remainingTime}</Text>}

  </CountdownCircleTimer>
)

const Statistiques: React.FC<PropStatistique> = ({ name }) => {
   const onFinishCD = () => {
    Alert.alert('Countdown Finished...');
  }
 
  const onPressCD = () => {
    Alert.alert('Countdown Component Pressed...');
  }
  return (
    <View className='mt-4 mx-4'>
       <View className='items-center  w-96 flex flex-row justify-between'>
        <Text className='font-[extraBold] text-lg text-primary'>{name}</Text>
          <TouchableOpacity  
                  activeOpacity={0.7} 
                  className={"h-6 w-18 items-center justify-center rounded-full px-3 bg-gray-200"}
            >
              <Text className='text-l font-normal text-gray'>Voir plus</Text>
          </TouchableOpacity>
      </View>
      <View className='flex flex-row'>
        <View className='border-4 w-28 h-28 rounded-full border-[#50BE87] items-center justify-center '>
          <Text className='font-extrabold text-4xl'>1</Text>
          <Text>Match(s) joué</Text>
        </View>
        <View className="w-2/3 ml-2 rounded-xl bg-[#E5E5E5] py-4 ">
          
          <View className='ml-2 flex flex-row justify-between pr-4'>
            <View className='flex flex-row justify-start items-center'>
              <View className='w-5 h-5 rounded-full bg-[#50BE87]'></View>
                <Text className='ml-3'>Victoires :  </Text>
            </View>
            <View>
             < Text className='font-semibold'> 1</Text>
            </View>
          </View>

            <View className='ml-2 flex flex-row justify-between pr-4 pt-2'>
            <View className='flex flex-row justify-start items-center'>
              <View className='w-5 h-5 rounded-full bg-[#4BB4E6]'></View>
                <Text className='ml-3'>Matchs null :  </Text>
            </View>
            <View>
             < Text className='font-semibold'> 0</Text>
            </View>
          </View>

            <View className='ml-2 flex flex-row justify-between pr-4 pt-2'>
            <View className='flex flex-row justify-start items-center'>
              <View className='w-5 h-5 rounded-full bg-[#EA0606]'></View>
                <Text className='ml-3'>Defaite :  </Text>
            </View>
            <View>
             < Text className='font-semibold'> 0</Text>
            </View>
          </View>
        </View>
    </View>
    </View>

    
  );
};

export { Statistiques }

const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
  },
 
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'green',
    padding: 3,
  }
 
});