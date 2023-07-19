import { View, Text } from 'react-native'
import React from 'react'
import { Matchs } from './Matchs' 
import { Effectif } from './Effectif'
import { Statistiques } from './Statistiques'

type PropVue = {
  name:string
} 

const VueEnsemble: React.FC<PropVue> = ({name}) => {
  return (
    <View>
      {/* <Text> {name}</Text> */}
   
              <Matchs name={'Matchs'}></Matchs>
      <Effectif name='Effectif'></Effectif>
      <Statistiques name='Statistiques'></Statistiques>
   
    </View>
  )
}


export  {VueEnsemble}