import { HomeTabsParamList } from '@navigation/app/home/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { MatchsStack } from '@navigation/app/home/matchs';

const Matchs: React.FC<
  NativeStackScreenProps<HomeTabsParamList, 'Home/Matchs'>
> = () => {
  return <MatchsStack />
}
export default Matchs
