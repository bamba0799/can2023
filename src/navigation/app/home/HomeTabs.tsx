import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeTabsParamList } from './types';
import tabItems from '@data/homeTabItems';

const Tab = createBottomTabNavigator<HomeTabsParamList>();

const HomeTabs = () => {
  return (
    <Tab.Navigator id="HomeTab">
      {tabItems.map((tabItem) => (
        <Tab.Screen
          key={tabItem.id}
          name={tabItem.name}
          component={tabItem.Screen}
          options={() => ({
            headerShown: false,
            tabBarItemStyle: {
              paddingBottom: 6,
            },
            tabBarStyle: {
              shadowOpacity: 1,
              shadowColor: '#d1d5db', // bg-gray-300
              shadowOffset: {
                width: 0,
                height: 0.1,
              },
            },
            tabBarIcon: ({ focused }) => {
              return (
                <Ionicons
                  name={tabItem.icon.name as any}
                  size={20}
                  color={`${focused ? '#ff7900' : 'black'}`}
                />
              );
            },
            tabBarLabel({ focused }) {
              return (
                <Text
                  className={`font-[medium] text-[10px] leading-[12px] ${
                    focused ? 'text-primary' : ''
                  }`}
                >
                  {tabItem.label}
                </Text>
              );
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default HomeTabs;
