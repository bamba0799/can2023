import { useEffect, useState } from 'react';
import { RefreshControl, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GoodDealsStackParamList } from '@navigation/app/home/goodDeals/types';
import { ScreenContentLayout } from '@layouts/ScreenContentLayout';
import { useCategories, useGoodDeals } from './hooks';
import { getPOIByCategory, getVIP } from './api';
import { ScreenLoader } from '@components/ScreenLoader';
import { Promotions } from './components/Promotions';
import { POITabLabelList } from './components/POITabLabelList';
import { POIList } from './components/POIList';
import { useRefreshOnFocus } from '@hooks/api/refetch';

const Main: React.FC<
  NativeStackScreenProps<GoodDealsStackParamList, 'GoodDeals/Main'>
> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [POISets, setPOISets] = useState<any[]>([]);
  const [isPOISetsLoading, setIsPOISetsLoading] = useState<boolean>(false);
  const tabLabelListQuery = useCategories();
  const goodDealQuery = useGoodDeals();
  useRefreshOnFocus(() =>
    Promise.all([goodDealQuery.refetch, tabLabelListQuery.refetch])
  );

  const getInitialPOISets = async () => {
    setIsPOISetsLoading(true);

    try {
      const data = await getVIP();
      setPOISets(data);
    } catch (e: any) {
      console.log(e.message);
    } finally {
      setIsPOISetsLoading(false);
    }
  };

  useEffect(() => {
    getInitialPOISets();
  }, []);

  const redefineActiveTabId = async (tabId: string) => {
    setIsPOISetsLoading(true);

    try {
      let data: any[];
      if (tabId === '0') {
        data = await getVIP();
      } else {
        data = await getPOIByCategory(tabId);
      }
      setPOISets(data);
    } catch (e: any) {
      console.log(e.message);
    } finally {
      setIsPOISetsLoading(false);
    }
  };

  // waiting for the first data ⏳
  if (goodDealQuery.isLoading && tabLabelListQuery.isLoading) {
    return <ScreenLoader />;
  }

  return (
    <View
      className="flex-1"
      style={{
        paddingTop: insets.top,
      }}
    >
      <ScreenContentLayout
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 12,
          paddingHorizontal: 0,
          paddingBottom: 32,
        }}
        refreshControl={
          <RefreshControl
            refreshing={
              tabLabelListQuery.isRefetching || goodDealQuery.isRefetching
            }
            onRefresh={async () => {
              await Promise.all([
                tabLabelListQuery.refetch,
                goodDealQuery.refetch,
              ]);
            }}
          />
        }
      >
        <Promotions
          isLoading={goodDealQuery.isLoading}
          isError={goodDealQuery.isError}
          data={goodDealQuery.data}
        />
        <POITabLabelList
          isLoading={tabLabelListQuery.isLoading}
          isError={tabLabelListQuery.isError}
          data={tabLabelListQuery.data as any[]}
          changeTabId={redefineActiveTabId}
        />
        <POIList
          isLoading={isPOISetsLoading}
          data={POISets}
        />
      </ScreenContentLayout>
    </View>
  );
};

export { Main };
