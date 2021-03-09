import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import CoinsNavigator from './coins.navigator';
import ConverterNavigator from './converter.navigator';

import COLORS from '../constants/colors';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: COLORS.primaryAqua,
      inactiveTintColor: COLORS.secondaryAqua,
      activeBackgroundColor: COLORS.primaryBlack,
      inactiveBackgroundColor: COLORS.primaryBlack,
      style: {
        backgroundColor: COLORS.primaryBlack,
        borderTopColor: COLORS.primaryAqua,
      },
    }}>
    <Tab.Screen
      name="Coins"
      component={CoinsNavigator}
      options={{
        title: 'Coins',
        tabBarIcon: ({focused, color, size}) => {
          return (
            <Icon name="analytics-outline" color={color} size={size + 3} />
          );
        },
        tabBarLabel: () => null,
      }}
    />
    <Tab.Screen
      name="Converter"
      component={ConverterNavigator}
      options={{
        tabBarIcon: ({focused, color, size}) => {
          return <Icon name="cash-outline" color={color} size={size + 3} />;
        },
        tabBarLabel: () => null,
      }}
    />
  </Tab.Navigator>
);

export default HomeNavigator;
