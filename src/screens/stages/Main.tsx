import { useEffect, useMemo, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StagesStackParamsList } from '@navigation/app/home/stages/types';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { useFetchAllGroups } from './hooks';
import stagesTabItems from '@data/stagesTabItems';
import { Badge } from '@components/Badge';
import { Header } from '@components/Header';
import { Ranking } from './components/Ranking';
import { useRefreshOnFocus } from '@hooks/api';
import { fetchAllGroups } from './api';
import { ScreenLoader } from '@components/ScreenLoader';
import { Center } from '@components/Center';

const Main: React.FC<
  NativeStackScreenProps<StagesStackParamsList, 'Stages/Main'>
> = ({ navigation, route }) => {
  const {
    data: groups,
    status,
    isRefetching,
    refetch,
  } = useFetchAllGroups();
  useRefreshOnFocus(fetchAllGroups);

  const groupLabels = useMemo(() => {
    return groups?.map((group) => group.id);
  }, [groups]);

  const [activeTabID, setActiveTabID] = useState(groupLabels?.at(0));

  useEffect(() => {
    setActiveTabID(groups?.at(0))
  }, [groupLabels, groups]);

  if (status !== 'success') {
    return status === 'loading' ? (
      <ScreenLoader />
    ) : (
      <Center>
        <Text>Erreur lors du chargement.</Text>
      </Center>
    );
  }

  return (
    <View className="flex-1">
      <Header
        title="Phases"
        showProfile={false}
      />

      <ScreenContentLayout
        contentContainerStyle={{ paddingTop: 16 }}
        refreshControl={
          <RefreshControl
            refreshing={isRefetching}
            onRefresh={refetch}
          />
        }
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
                isSelected={id === 1} // TODO:  CHANGE
                style={{
                  opacity: id !== 1 ? 0.2 : 1
                }}
              />
            ))}
          </ScrollView>
        </View>

        <View
          className="mx-4 mb-4 mt-8 flex-1"
          style={{ gap: 32 }}
        >
          {groups?.map((group: any, i: number) =>
            group.teams?.length > 0 ? (
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
