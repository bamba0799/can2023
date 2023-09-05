import { StatusBar } from 'expo-status-bar';
import { View, Text, Dimensions, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { GoodDealsStackParamList } from '@navigation/app/home/goodDeals/types';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { useHideBottomTab } from '@hooks/navigation';
import { Button } from '@components/Button';
import { makeCall } from '@utils/call';
import { launchMap } from '@utils/map';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Details: React.FC<
  NativeStackScreenProps<GoodDealsStackParamList, 'GoodDeals/Details'>
> = ({ navigation, route: { params: data } }) => {
  useHideBottomTab();
  const insets = useSafeAreaInsets();

  const makeACall = async (number: string) => {
    try {
      await makeCall(number);
    } catch (e: any) {
      console.log(e.message);
    }
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

  return (
    <>
      <View className="flex-1">
        <ScreenContentLayout
          bounces={false}
          contentContainerStyle={{
            padding: 0,
            paddingBottom: 32,
          }}
        >
          <View
            style={{
              width: '100%',
              height: SCREEN_HEIGHT / 3,
            }}
          >
            <Image
              source={{ uri: data?.photo }}
              className="absolute z-[98] h-full w-full"
              resizeMode="cover"
            />
            <View className="absolute h-full w-full bg-gray-200" />

            <Button
              onPress={navigation.goBack}
              className="z-[99] self-start rounded-full bg-gray-300/50 p-1.5"
              style={{
                marginTop: insets.top + 12,
                marginLeft: 16,
              }}
            >
              <Ionicons
                name="ios-arrow-back"
                size={16}
              />
            </Button>
          </View>

          <View className="mt-6 px-4">
            <View className="space-y-4">
              <View className="flex-row justify-between space-x-2">
                <Text className="font-[extraBold] text-lg">{data?.name}</Text>
                <View className="flex-row space-x-2">
                  {buttons.map(({ id, type, color, icon }) => (
                    <Button
                      key={id}
                      className={`${color} rounded-full p-2`}
                      onPress={
                        type === 'phone'
                          ? () => makeACall(data?.contact)
                          : () => launchMap(data?.location)
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
              <Text className="text-base">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic
                voluptate aperiam architecto ipsam culpa earum harum dolorem,
                atque cum ducimus amet soluta esse, error illum vero eaque quis
                ut optio! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Ipsa repellendus reprehenderit ipsam cum doloribus magnam
                eligendi alias voluptatum dolore excepturi.
              </Text>
            </View>
          </View>
        </ScreenContentLayout>
      </View>
      <StatusBar style="inverted" />
    </>
  );
};

export { Details };
