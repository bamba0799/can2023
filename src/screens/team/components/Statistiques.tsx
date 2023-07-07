import { View, Text,StyleSheet } from 'react-native'
import React from 'react'



type PropStatistique = {
  name: string;
};

const Statistiques: React.FC<PropStatistique> = ({name}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', height: 1050 },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
export  {Statistiques}