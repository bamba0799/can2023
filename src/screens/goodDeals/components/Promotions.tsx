import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Center } from '@components/Center';

const Promotions: React.FC<{
  isLoading: boolean;
  isError: boolean;
  data: any[];
}> = (props) => {
  return (
    <View>
      {props.isLoading ? ( // on loading
        <>
          <View className="mx-4 h-7 w-32 rounded-full bg-gray-300" />

          <FlatList
            horizontal
            // keyExtractor={(item, _idx) => item + _idx}
            data={[...Array(3).keys()]}
            className="mt-4"
            decelerationRate="fast"
            snapToInterval={342}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              columnGap: 16,
              paddingHorizontal: 16,
            }}
            renderItem={() => {
              return (
                <View className="h-[180] w-[320px] overflow-hidden rounded-2xl bg-gray-200" />
              );
            }}
          />
        </>
      ) : props.isError ? ( // on error
        <Center>
          <Text>Erreur survenue lors du chargement des PROMOTIONS</Text>
        </Center>
      ) : (
        // on success
        <>
          <View className="px-4">
            <Text className="font-[extraBold] text-lg">Promotions</Text>
          </View>

          <FlatList
            horizontal
            keyExtractor={(goodDeal) => goodDeal.id}
            data={props.data}
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
                    source={{ uri: item.image }}
                    className="h-full w-full"
                    resizeMode="cover"
                  />
                </View>
              );
            }}
          />
        </>
      )}
    </View>
  );
};

export { Promotions };
