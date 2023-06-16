import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeTabsParamList } from '@navigation/app/home/types';

// screens
import { Home } from '@screens/home';
import { Matchs } from '@screens/matchs';
import { Stages } from '@screens/stages';
import { GoodDeals } from '@screens/goodDeals';
import { Extra } from '@screens/extra';

type HomeTabItemProps = {
  id: string;
  name: keyof HomeTabsParamList;
  Screen: React.FC<NativeStackScreenProps<HomeTabsParamList, any>>;
  label: string;
  icon: {
    name: string;
  };
};

const items: Array<HomeTabItemProps> = [
  {
    id: '1',
    name: 'Home/Home',
    Screen: Home,
    label: 'Accueil',
    icon: {
      name: 'ios-home-outline',
    },
  },
  {
    id: '2',
    name: 'Home/Stages',
    Screen: Stages,
    label: 'Phases',
    icon: {
      name: 'ios-trophy-outline',
    },
  },
  {
    id: '3',
    name: 'Home/Matchs',
    Screen: Matchs,
    label: 'Matchs',
    icon: {
      name: 'ios-football-outline',
    },
  },
  {
    id: '4',
    name: 'Home/GoodDeals',
    Screen: GoodDeals,
    label: 'Bon plans',
    icon: {
      name: 'ios-flame-outline',
    },
  },
  {
    id: '5',
    name: 'Home/Extra',
    Screen: Extra,
    label: 'Extra',
    icon: {
      name: 'ios-menu-outline',
    },
  },
];

export default items;
