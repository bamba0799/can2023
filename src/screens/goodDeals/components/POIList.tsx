import React from 'react';
import { View, Text } from 'react-native';
import { POICard } from './POICard';

const POIList: React.FC<{
  isLoading: boolean;
  data: any[];
}> = ({ data, isLoading }) => {
  return (
    <View className="mx-4 mt-10 space-y-10">
      {isLoading // display a skeleton loader on loading
        ? [...Array(1).keys()].map((item: any) => {
            return (
              <View
                key={item}
                className="flex-1 space-y-4"
              >
                <View className="h-7 w-36 rounded-full bg-gray-300" />
                <View className="mt-6 space-y-8">
                  {[...Array(3).keys()].map((item: any) => {
                    return (
                      <View
                        key={item}
                        className="w-full space-y-2"
                      >
                        <View
                          key={item}
                          className="h-[164px] w-full rounded-2xl bg-gray-300"
                        />
                        <View className="flex-row items-center justify-between">
                          <View className="h-7 w-44 rounded-full bg-gray-300" />

                          <View className="flex-row space-x-2">
                            <View className="h-[30px] w-[30px] rounded-full bg-gray-300" />
                            <View className="h-[30px] w-[30px] rounded-full bg-gray-300" />
                          </View>
                        </View>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })
        : // on succes
          data.map((POISet: any) => {
            return (
              <View
                key={POISet.id}
                className="flex-1 space-y-4"
              >
                <Text className="font-[extraBold] text-lg text-primary">
                  {POISet.label}
                </Text>

                <View style={{ rowGap: 32 }}>
                  {POISet.interestPoints.map((poi: any) => {
                    return (
                      <POICard
                        key={poi.id}
                        data={poi}
                      />
                    );
                  })}
                </View>
              </View>
            );
          })}
    </View>
  );
};

export { POIList };
