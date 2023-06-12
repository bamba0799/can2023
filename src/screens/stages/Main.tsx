import { useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StagesStackParamsList } from '@navigation/app/home/stages/types';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { useFetchAllGroups } from './hooks';
import stagesTabItems from '@data/stagesTabItems';
import { Badge } from '@components/Badge';
import { Header } from '@components/Header';
import { Ranking } from './components/Ranking';

const Main: React.FC<
  NativeStackScreenProps<StagesStackParamsList, 'Stages/Main'>
> = ({ navigation, route }) => {
  const { data: groups, status } = useFetchAllGroups();
  const [activeTabID, setActiveTabID] = useState(1);

  if (status !== 'success') {
    return (
      <View className="flex-1 items-center justify-center">
        {status === 'loading' ? (
          <ActivityIndicator />
        ) : (
          <Text>Erreur lors du chargement.</Text>
        )}
      </View>
    );
  }

  return (
    <View className="flex-1">
      <Header title="Phases" />

      <ScreenContentLayout
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16 }}
      >
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              columnGap: 12,
              paddingHorizontal: 16,
            }}
          >
            {stagesTabItems.map(({ id, label }) => (
              <Badge
                key={id}
                title={label}
                isSelected={id === activeTabID}
              />
            ))}
          </ScrollView>
        </View>

        <View
          className="mx-4 mb-4 mt-8 flex-1"
          style={{ gap: 32 }}
        >
          {groups?.map((group: any, i: number) =>
            group.teams.length > 0 ? (
              <Ranking
                key={group.id}
                group={group}
                showDetailsButton
                onNavigateToDetails={() =>
                  navigation.navigate('Stages/Details', group)
                }
              />
            ) : null
          )}
        </View>
      </ScreenContentLayout>
    </View>
  );
};

export { Main };
