import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GoodDealsStackParamList } from '@navigation/app/home/goodDeals/types';
import { ScreenLoader } from '@components/ScreenLoader';
import { useGoodDeals } from './hooks';
import { getCategories } from './api';
import { Badge } from '@components/Badge';
import { POICard } from './components/POICard';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { useRefreshOnFocus } from '@hooks/api/refetch';
import { Center } from '@components/Center';

const Main: React.FC<
  NativeStackScreenProps<GoodDealsStackParamList, 'GoodDeals/Main'>
> = ({ navigation }) => {
  const {
    data: promotions,
    isLoading: isPromotionsLoading,
    isError: isPromotionError,
    refetch: refetchGoodDeals,
  } = useGoodDeals();
  const {
    data: spots,
    isLoading: isSpotsLoading,
    isError: isSpotsError,
    refetch: refetchCategories,
  } = useQuery(['spots-by-category'], getCategories);

  const categoryLabels = useMemo(() => {
    return spots?.map((spot) => spot.label);
  }, [spots]);

  const [activeTabLabel, setActiveTabLabel] = useState(categoryLabels?.at(0));
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true);
      setTimeout(() => { }, 2000);
      await Promise.all([refetchGoodDeals, refetchCategories]);
    } catch (e: any) {
      console.log(e.message);
    } finally {
      setRefreshing(false);
    }
  }, []);

  // automatically refetch on screen focus
  useRefreshOnFocus(onRefresh);

  useEffect(() => {
    setActiveTabLabel(categoryLabels?.at(0));
  }, [categoryLabels, spots]);

  if (isPromotionsLoading || isSpotsLoading) {
    return <ScreenLoader />;
  }

  if (isPromotionError || isSpotsError) {
    return (
      <Center>
        <Text>Erreur survenue. Réessayer plus tard</Text>
      </Center>
    );
  }

  return (
    <SafeAreaView className="flex-1">
      <ScreenContentLayout
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        {/* PROMOTIONS */}
        <View>
          <View className="px-4">
            <Text className="font-[extraBold] text-lg">Promotions</Text>
          </View>

          <FlatList
            horizontal
            data={promotions}
            className="mt-4"
            decelerationRate="fast"
            snapToInterval={342}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              columnGap: 16,
              paddingHorizontal: 16,
            }}
            renderItem={({ item }) => {
              return (
                <View className="h-[180] w-[320px] overflow-hidden rounded-2xl bg-gray-200">
                  <Image
                    source={{ uri: item.photo }}
                    className="h-full w-full"
                    resizeMode="cover"
                  />
                </View>
              );
            }}
          />
        </View>

        {/* CATEGORY LABELS */}
        <View>
          <View className="mt-10 px-4">
            <Text className="font-[extraBold] text-lg">Points d'intérêts</Text>
          </View>

          <FlatList
            horizontal
            data={categoryLabels!}
            showsHorizontalScrollIndicator={false}
            className="mt-4"
            contentContainerStyle={{
              columnGap: 10,
              paddingHorizontal: 16,
            }}
            renderItem={({ item: label }) => {
              return (
                <Badge
                  title={label}
                  isSelected={label === activeTabLabel}
                  onPress={() => setActiveTabLabel(label)}
                />
              );
            }}
          />
        </View>

        {/* SPOTS */}
        <View
          className="mt-6 px-4"
          style={{ rowGap: 32 }}
        >
          {spots
            ?.filter((category) => category.label === activeTabLabel)
            .map((category) =>
              category.interestPoints
                .sort((a: any, b: any) => {
                  return -(Number(a.vip) - Number(b.vip));
                })
                .map((spot: any) => {
                  return (
                    <POICard
                      key={spot.id}
                      data={spot}
                    />
                  );
                })
            )}
        </View>
      </ScreenContentLayout>
    </SafeAreaView>
  );
};

export { Main };
