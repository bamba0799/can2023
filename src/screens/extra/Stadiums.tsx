import { Image, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { ExtraStackParamList } from '@navigation/app/home/extra/types';
import { useAllStadiums } from './hooks/stadiums';
import { ScreenLoader } from '@components/ScreenLoader';
import { Header } from '@components/Header';

const Stadiums: React.FC<
  NativeStackScreenProps<ExtraStackParamList, 'Extra/Stadiums'>
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
      />

      <ScreenContentLayout
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}
      >
        <View className="gap-y-10">
          {stadiums.map((stadium: any) => {
            return (
              <View
                key={stadium.id}
                className="w-full"
              >
                {/* <Image source={} /> */}
                <View className="h-[164px] w-full rounded-2xl bg-gray-300" />
                <View className="mt-2">
                  <Text className="font-[bold] text-base">{stadium.name}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScreenContentLayout>
    </View>
  );
};

export { Stadiums };
