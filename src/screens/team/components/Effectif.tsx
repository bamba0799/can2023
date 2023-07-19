import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import React from 'react'

type Player = {
  id: number;
  name: string;
  photo: string;
  number: number;
  position: string;
};

const players: Player[] = [
  {
    id: 1,
    name: 'Didier Drogba',
    photo: 'https://img.a.transfermarkt.technology/portrait/big/3924-1683633427.jpg?lm=1',
    number: 11,
    position: 'Attaquant',
  },
  {
    id: 2,
    name: 'Yaya Touré',
    photo: 'https://img.a.transfermarkt.technology/portrait/big/3924-1683633427.jpg?lm=1',
    number: 8,
    position: 'Milieu de terrain',
  },
  // Ajoutez les autres joueurs ici...
];


type PropEffectif = {
  name: string;
};


const Effectif: React.FC<PropEffectif> = ({ name }) => {
  
    const renderPlayer = ({ item }: { item: Player }) => (
    <View style={styles.playerContainer}>
      <Image source={{ uri: item.photo }} style={styles.playerPhoto} />
      <View style={styles.playerInfo}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Text style={styles.playerDetails}>Numéro {item.number}</Text>
        <Text style={styles.playerDetails}>Poste : {item.position}</Text>
      </View>
    </View>
  );
  return (
    <View className='mt-4'>
      <Text className='font-[extraBold] text-lg text-primary'>{name}</Text>
      <View className="w-16 h-16 items-center justify-center rounded-full bg-white py-4">
        <View style={styles.container}>
      <FlatList
        data={players}
        renderItem={renderPlayer}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
          
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playerPhoto: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 25,
  },
  playerInfo: {
    flex: 1,
  },
  playerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  playerDetails: {
    fontSize: 14,
  },
});

export  {Effectif}