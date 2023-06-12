import { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { ExtraStackParamList } from '@navigation/app/home/extra/types';
import { useCurrentTeams, useFavTeams } from '@hooks/api/teams';
import { useAuthStore } from '@store/auth';
import { Header } from '@components/Header';
import { ScreenLoader } from '@components/ScreenLoader';
import { Button } from '@components/Button';

const FavTeams: React.FC<
  NativeStackScreenProps<ExtraStackParamList, 'Extra/FavTeams'>
> = ({ navigation, route }) => {
  const user = useAuthStore((state) => state.user);
  const { data: currentTeams, isLoading: isCurrentLoading } = useCurrentTeams();
  const { data: favTeams, isLoading: isFavLoading } = useFavTeams(
    user?.userId!
  );

  // TODO: create handlers
  // ...

  if (isCurrentLoading || isFavLoading) {
    return <ScreenLoader />;
  }

  return (
    <View className="flex-1">
      <Header
        title="Équipes favorites"
        showBackIcon
        onNavigateBack={navigation.goBack}
      />

      <ScreenContentLayout
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}
      >
        <View>
          <Text className="text-2xl font-bold">
            Suivez vos équipes favorites
          </Text>
          <Text className="text-primary-gray-dark mt-1 text-sm font-normal">
            Obtenez toute l’actualité concernant vos équipes préférées
          </Text>
        </View>

        {/* Current team list */}
        <View className="mt-6 rounded-xl border-gray-300/60">
          {currentTeams.map((team: any, i: number, arr: any[]) => (
            <View
              key={team.id}
              className={`flex-row items-center justify-between ${
                i === arr.length - 1 ? '' : 'border-b border-gray-300/60'
              } py-1.5`}
            >
              <View className="flex-row items-center space-x-3">
                <View className="rounded-full border border-gray-200">
                  <Image
                    source={{ uri: team.flag }}
                    className="h-8 w-8 rounded-full"
                    resizeMode="cover"
                  />
                </View>
                <Text>
                  {team.name} ({team.code})
                </Text>
              </View>

              <Button
                className="w-24 flex-row items-center justify-center space-x-1 rounded-full border bg-transparent px-3 py-[6px]"
                onPress={() => null}
              >
                <Text className="text-xs font-semibold text-black">Suivre</Text>
              </Button>
            </View>
          ))}
        </View>
      </ScreenContentLayout>
    </View>
  );
};

export { FavTeams };
