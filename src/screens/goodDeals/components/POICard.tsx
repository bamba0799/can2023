import React, { useEffect } from 'react';
import { Text, Pressable, Image, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { GoodDealsStackParamList } from '@navigation/app/home/goodDeals/types';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@components/Button';
import { makeCall } from '@utils/call';
import { launchMap } from '@utils/map';

type POICardProps = {
  data: any;
};

const buttons = [
  {
    id: 1,
    type: 'phone',
    color: 'bg-[#03bd05]',
    icon: { name: 'ios-call-sharp', size: 13, color: 'white' },
  },
  {
    id: 2,
    type: 'map',
    color: 'bg-[#247dbd]',
    icon: { name: 'ios-location-sharp', size: 13, color: 'white' },
  },
];

const POICard: React.FC<POICardProps> = ({ data }) => {
  const navigation = useNavigation<NavigationProp<GoodDealsStackParamList>>();

  const makeACall = async (number: string) => {
    try {
      await makeCall(number);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Pressable
      className="w-full space-y-2"
      onPress={() => navigation.navigate('GoodDeals/Details', data)}
    >
      <View className="h-[164px] w-full overflow-hidden rounded-2xl">
        <View className="relative h-full w-full bg-gray-300" />
        <Image
          source={{ uri: data.photo }}
          className="absolute z-50 h-full w-full rounded-2xl"
          resizeMode="cover"
        />
      </View>
      <View className="flex-row items-center justify-between">
        <Text className="font-[extraBold] text-lg">{data.name}</Text>

        <View className="flex-row space-x-2">
          {buttons.map(({ id, type, color, icon }) => (
            <Button
              key={id}
              className={`${color} rounded-full p-2`}
              onPress={
                type === 'phone'
                  ? () => makeACall(data.contact)
                  : () => launchMap(data.location)
              }
            >
              <Ionicons
                name={icon.name as any}
                size={icon.size}
                color={icon.color}
              />
            </Button>
          ))}
        </View>
      </View>
    </Pressable>
  );
};

export { POICard };
