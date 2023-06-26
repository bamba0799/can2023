import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MatchsStackParamList } from './types';

import {Main} from '@screens/matchs/Main'
import MatchsBuyTicket from '@screens/matchs/MatchsBuyTicket'

const Stack = createNativeStackNavigator<MatchsStackParamList>()

const MatchsStack = () => {
  return(
    <Stack.Navigator
    initialRouteName='Matchs/Main'
    screenOptions={{ headerShown: false }}
    >
    <Stack.Screen name='Matchs/Main' component={Main}/>
    <Stack.Screen name='Matchs/MatchsBuyTicket' component={MatchsBuyTicket}/>

    </Stack.Navigator>
  )
}
export default MatchsStack

