import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { ExtraStackParamList } from '@navigation/app/home/extra/types';
import moreMenuItems from '@data/moreMenuItems';

import { View, Text, TouchableOpacity } from 'react-native';

const Main: React.FC<
  NativeStackScreenProps<ExtraStackParamList, 'Extra/Main'>
> = ({ navigation, route }) => {
  return (
    <View className="flex-1">
      <Header
        title="Extra"
        onNavigateBack={navigation.goBack}
      />

      <ScreenContentLayout
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}
      >
        <View className="justify-center gap-[18px]">
          {moreMenuItems.sort().map((item) => {
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                onPress={() => navigation.navigate<any>(item.to)}
                className="flex-row items-center justify-between rounded-2xl bg-white p-4"
                style={{
                  shadowOffset: {
                    width: 2,
                    height: 5,
                  },
                  shadowColor: '#DDDDDD',
                  shadowOpacity: 0.3,
                }}
              >
                <View className="flex-row items-center space-x-3">
                  <Ionicons
                    name={item.icon.name as any}
                    size={item.icon.size}
                  />
                  <Text className="text-base font-bold">{item.label}</Text>
                </View>
                <Button
                  className="rounded-full bg-[#EFEFEF] p-2"
                  onPress={() => navigation.navigate<any>(item.to)}
                >
                  <Ionicons
                    name="ios-arrow-forward-sharp"
                    size={20}
                  />
                </Button>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScreenContentLayout>
    </View>
  );
};

export { Main };
