import { View, Text } from 'react-native'
import React from 'react'


type PropEffectif = {
  name: string;
};
const Effectif: React.FC<PropEffectif> = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export  {Effectif}