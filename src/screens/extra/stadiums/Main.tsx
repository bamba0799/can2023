import { Image, Pressable, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { StadiumsParamList } from '@navigation/app/home/stadiums/types';
import { ScreenLoader } from '@components/ScreenLoader';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { launchMap } from '@utils/map';
import { useAllStadiums } from '../hooks/stadiums';

export const Main: React.FC<
  NativeStackScreenProps<StadiumsParamList, 'Stadium/Main'>
> = ({ navigation, route }) => {
  const { data: stadiums, isLoading: isStadiumsLoading } = useAllStadiums();

  if (isStadiumsLoading) {
    return <ScreenLoader />;
  }

  return (
    <View className="flex-1">
      <Header
        title="Stades"
        showBackIcon
        onNavigateBack={navigation.goBack}
        showProfile={false}
      />

      <ScreenContentLayout
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}
      >
        <View className="gap-y-10">
          {stadiums.map((stadium: any) => {
            return (
              <Pressable
                key={stadium.id}
                className="w-full"
                onPress={() => navigation.navigate('Stadium/Details', stadium)}
              >
                <View className="h-[164px] w-full overflow-hidden rounded-2xl">
                  <View className="absolute z-[1] h-full w-full bg-gray-300" />
                  <Image
                    source={{ uri: stadium.photo }}
                    className="absolute left-0 top-0 z-[98] h-full w-full"
                    resizeMode="cover"
                  />
                </View>
                <View className="mt-2 flex-row justify-between gap-x-3">
                  <Text className="font-[extraBold] text-lg">
                    {stadium.name}
                  </Text>
                  <Button
                    className="rounded-full bg-[#247dbd] p-2"
                    onPress={() => launchMap(stadium.location)}
                  >
                    <Ionicons
                      name="ios-location-sharp"
                      size={13}
                      color="white"
                    />
                  </Button>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScreenContentLayout>
    </View>
  );
};
