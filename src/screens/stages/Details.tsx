import { View, Text, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StagesStackParamsList } from '@navigation/app/home/stages/types';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { Header } from '@components/Header';
import { Ranking } from './components/Ranking';

const Details: React.FC<
  NativeStackScreenProps<StagesStackParamsList, 'Stages/Details'>
> = ({ navigation, route: { params: group } }) => {
  return (
    <View className="flex-1">
      <Header
        title={`Groupe ${group?.label.toUpperCase()}`}
        showBackIcon
      />

      <ScreenContentLayout contentContainerStyle={{ paddingTop: 16 }}>
        <View className="mx-3 mb-6">
          <Ranking group={group} />

          <Text className="text-primary-orange mt-8 font-bold">
            Lundi, 10 Avril 2024
          </Text>

          <View
            className="mt-3 items-center justify-center rounded-xl bg-white px-10 py-4"
            style={{
              shadowOpacity: 0.5,
              shadowColor: '#d1d5db', // bg-gray-300
              shadowOffset: {
                width: 0,
                height: 0.1,
              },
            }}
          >
            <View
              className="flex-row items-center"
              style={{ gap: 16 }}
            >
              {/* Left Side */}
              <View className="flex-row items-center gap-x-3">
                <Text className="text-base font-bold">
                  {group?.teams[0].code}
                </Text>
                <View className="rounded-full border border-gray-100">
                  <Image
                    source={{ uri: group?.teams[0].flag }}
                    className="h-[40px] w-[40px] rounded-full"
                    resizeMode="cover"
                  />
                </View>
              </View>

              {/* Middle */}
              <View className="flex-1">
                {/* Score */}
                <View
                  className="flex-row justify-center"
                  style={{ gap: 12 }}
                >
                  <Text className="text-2xl font-bold">VS</Text>
                </View>
              </View>

              {/* Right Side */}
              <View className="flex-row items-center gap-x-3">
                <View className="rounded-full border border-gray-100">
                  <Image
                    source={{ uri: group?.teams[3].flag }}
                    className="h-[40px] w-[40px] rounded-full"
                    resizeMode="cover"
                  />
                </View>
                <Text className="text-base font-bold">
                  {group?.teams[3].code}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScreenContentLayout>
    </View>
  );
};

export { Details };
