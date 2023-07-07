import { View, Text } from 'react-native'
import React from 'react'

type PropVue = {
  name:string
} 

const VueEnsemble: React.FC<PropVue> = ({name}) => {
  return (
    <View>
      <Text> {name}</Text>
    </View>
  )
}


export  {VueEnsemble}