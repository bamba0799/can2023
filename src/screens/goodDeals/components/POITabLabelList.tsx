import React, { useState } from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { Center } from '@components/Center';
import { Badge } from '@components/Badge';

const POITabLabelList: React.FC<{
  isLoading: boolean;
  isError: boolean;
  data: any[];
  changeTabId: (tabId: string) => Promise<any> | void;
}> = ({ isLoading, isError, data, changeTabId }) => {
  const [activeTabId, setActiveTabId] = useState<string>('0');

  const activeTabHandler = async (tabId: string) => {
    setActiveTabId(tabId);
    await changeTabId(tabId);
  };

  return (
    <View>
      {isLoading ? ( // on loading
        <>
          <View className="mx-4 mt-10 h-7 w-48 rounded-full bg-gray-300" />
          <FlatList
            horizontal
            data={[...Array(5).keys()]}
            className="mt-4"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              columnGap: 10,
              paddingHorizontal: 16,
            }}
            renderItem={() => {
              return (
                <View className="h-[31] w-32 overflow-hidden rounded-2xl bg-gray-300" />
              );
            }}
          />
        </>
      ) : isError ? ( // on error
        <Center>
          <Text>Erreur survenue.</Text>
        </Center>
      ) : (
        // on success
        <>
          <View className="mt-10 px-4">
            <Text className="font-[extraBold] text-lg">Points d'intérêts</Text>
              </View>
              
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-4"
            contentContainerStyle={{
              columnGap: 10,
              paddingHorizontal: 16,
            }}
          >
            <Badge
              title="Vue d'ensemble"
              isSelected={activeTabId === '0'}
              onPress={() => activeTabHandler('0')}
            />
            {data.map((item: any) => {
              return (
                <Badge
                  key={item.id}
                  title={item.label}
                  onPress={() => activeTabHandler(item.id)}
                  isSelected={item.id === activeTabId}
                />
              );
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
};

export { POITabLabelList };
