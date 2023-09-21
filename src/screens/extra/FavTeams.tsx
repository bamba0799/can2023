import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { ExtraStackParamList } from '@navigation/app/home/extra/types';
import {
  useAddTeamAsFav,
  useCurrentTeams,
  useFavTeams,
  useRemoveTeamToFav,
} from '@hooks/api/teams';
import { useAuthStore } from '@store/auth';
import { Header } from '@components/Header';
import { ScreenLoader } from '@components/ScreenLoader';
import { Button } from '@components/Button';

type SelectedTeamStatus = 'sleep' | 'loading' | 'done';

type SelectedTeam = {
  id: string | null;
  status: SelectedTeamStatus;
};

const INITIAL_SELECTED_TEAM_OBJ: SelectedTeam = { id: null, status: 'sleep' };

const FavTeams: React.FC<
  NativeStackScreenProps<ExtraStackParamList, 'Extra/FavTeams'>
> = ({ navigation, route }) => {
  const user = useAuthStore((state) => state.user);
  const { data: currentTeams, isLoading: isCurrentLoading } = useCurrentTeams();
  const { data: favTeams, isLoading: isFavLoading } = useFavTeams(user?.id!);
  const { mutateAsync: addTeamAsFav } = useAddTeamAsFav();
  const { mutateAsync: unassignTeamToUser } = useRemoveTeamToFav();
  const queryClient = useQueryClient();
  const [selectedTeam, setSelectedTeam] = useState<SelectedTeam>(
    INITIAL_SELECTED_TEAM_OBJ
  );

  async function onFollow(team: any) {
    console.log("eeeeee",team.isMemberOfCurrentCAN)
    setSelectedTeam({ id: team.id, status: 'loading' });

    try {
      await addTeamAsFav(
        {
          teamId: team.id,
          userId: user?.id!,
          isMemberOfCurrentCAN: true,
        },
        {
          onSuccess(data, variables, ctx) {
            queryClient.invalidateQueries(['current-teams']);
            queryClient.invalidateQueries(['fav-teams', variables.userId]);
          },
        }
      );
    } catch (e: any) {
      console.log(`Error while assigning a team to user\n${e.message}`);
    }
  }

  async function onUnfollow(team: any) {
    setSelectedTeam({ id: team.id, status: 'loading' });

    try {
      await unassignTeamToUser(
        {
          userId: user?.id!,
          teamId: team.id,
        },
        {
          onSuccess(data, variables, ctx) {
            queryClient.invalidateQueries(['current-teams']);
            queryClient.invalidateQueries(['fav-teams', variables.userId]);
          },
        }
      );
    } catch (e: any) {
      console.log(e.message);
    }
  }

  if (isCurrentLoading || isFavLoading) {
    return <ScreenLoader />;
  }

  return (
    <View className="flex-1">
      <Header
        title="Équipes favorites"
        showBackIcon
        onNavigateBack={navigation.goBack}
        showProfile={false}
      />

      <ScreenContentLayout
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 24 }}
      >
        {/* Titles */}
        <View>
          <Text className="text-2xl font-bold">
            Suivez vos équipes favorites
          </Text>
          <Text className="text-primary-gray-dark mt-1 text-sm font-normal">
            Obtenez toute l’actualité concernant vos équipes préférées
          </Text>
        </View>

        {/* User's fav teams */}
        {favTeams.length ? (
          <View className="mt-6 space-y-3">
            <Text className="text-sm">Équipes suivies</Text>
            <View
              className="flex-row flex-wrap"
              style={{ columnGap: 12 }}
            >
              {favTeams.map((favTeam: any) => (
                <View
                  key={favTeam.id}
                  className="items-center gap-y-1"
                >
                  <View className="rounded-full border border-gray-200">
                    <Image
                      source={{ uri: favTeam.flag }}
                      className="h-11 w-11 rounded-full"
                      resizeMode="cover"
                    />
                    <View className="absolute -right-[2px] -top-[2px] rounded-full bg-primary p-0.5">
                      <Ionicons
                        name="ios-checkmark-sharp"
                        color="white"
                        size={12}
                      />
                    </View>
                  </View>
                  <Text className="text-xs">{favTeam.code}</Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {/* Current team list */}
        <View className="mt-6 rounded-xl border-gray-300/60">
          {currentTeams.map((team: any, idx: number, arr: any[]) => {
            return (
              <View
                key={team.id}
                className={`flex-row items-center justify-between ${idx === arr.length - 1 ? '' : 'border-b border-gray-300/60'
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

                {team.followingUsers.find((u: any) => u.id === user?.id) ? (
                  <Button
                    className={`w-24 flex-row items-center justify-center space-x-1.5 rounded-full border bg-black px-3 py-[6px]`}
                    onPress={() => onUnfollow(team)}
                  >
                    <Text className="text-xs font-semibold text-white">
                      Suivi
                    </Text>
                    <Ionicons
                      name="ios-checkmark-outline"
                      size={14}
                      color="white"
                    />
                  </Button>
                ) : (
                  <Button
                    className={`w-24 flex-row items-center justify-center space-x-1 rounded-full border bg-transparent px-3 py-[6px] ${selectedTeam.id === team.id ? '' : ''
                      }`}
                    onPress={() => onFollow(team)}
                  >
                    <Text className="text-xs font-semibold text-black">
                      Suivre
                    </Text>
                    <Ionicons
                      name="ios-add-outline"
                      size={14}
                    />
                  </Button>
                )}
              </View>
            )
          })}
        </View>
      </ScreenContentLayout>
    </View>
  );
};

export { FavTeams };
