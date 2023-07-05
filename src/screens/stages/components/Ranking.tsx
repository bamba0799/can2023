import React from 'react';
import { View, Text, Image, ViewStyle, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

type RankingProps = {
  group: any;
  showDetailsButton?: boolean;
  containerStyles?: ViewStyle;
  onNavigateToDetails?: () => void;
};

const Ranking: React.FC<RankingProps> = ({
  group,
  showDetailsButton = false,
  containerStyles = {},
  onNavigateToDetails,
}) => {
  const navigation = useNavigation();

  const navigateToTeam = (team: any) => {
    navigation.navigate('Stages/Team', {
      screen: 'Team/Main',
      params: team,
    });
  };

  return (
    <View style={[containerStyles]}>
      <View className="flex-row items-center justify-between">
        <Text className="font-bold">Groupe {group.label.toUpperCase()}</Text>
        {showDetailsButton ? (
          <Button
            className="flex-row items-center"
            onPress={onNavigateToDetails}
          >
            <Text className="font-bold text-primary">Détails</Text>
            <Ionicons
              name="ios-arrow-forward"
              size={18}
              color="#FF7900"
            />
          </Button>
        ) : null}
      </View>

      <View>
        <View className="mt-4 flex-row justify-between rounded-t-xl bg-black px-4 py-3">
          <Text className="font-bold text-white">Pays</Text>
          <View className="flex-row">
            {['J1', 'J2', 'J3', 'PTS'].map((title) => (
              <View
                key={title}
                className="w-8"
              >
                <Text className="text-center font-bold text-white">
                  {title}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View className="divide-y divide-gray-200 rounded-b-xl bg-white shadow-sm">
          {group.teams.map((team: any) => (
            <Pressable
              key={team.code}
              className="flex-row justify-between px-4 py-3"
              onPress={() => navigateToTeam(team)}
            >
              <View className="mr-2 flex-1 flex-row items-center space-x-3">
                <View className="rounded-full border border-gray-100">
                  <Image
                    source={{ uri: team.flag }}
                    className="h-[40px] w-[40px] rounded-full"
                    resizeMode="cover"
                  />
                </View>
                <Text>{team.name}</Text>
              </View>

              <View className="flex-row items-center">
                {[...Array(3).keys()].map((point, i) => (
                  <View
                    key={i}
                    className="w-8"
                  >
                    <Text className="text-center font-bold">-</Text>
                  </View>
                ))}
                <View className="w-8">
                  <Text className="text-primary-orange text-center font-bold">
                    -
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export { Ranking };
