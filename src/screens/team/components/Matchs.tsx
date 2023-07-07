import { View, Text } from 'react-native'
import React from 'react'
type PropMatch = {
  name: string;
}; 


const Matchs: React.FC<PropMatch> = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export  {Matchs}