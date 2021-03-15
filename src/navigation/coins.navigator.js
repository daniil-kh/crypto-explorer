import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CoinsScreen from '../screens/coins/coins.screen';

import COLORS from '../constants/colors';

const Stack = createStackNavigator();

const CoinsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.primaryAqua,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen
      name="CoinList"
      component={CoinsScreen}
      options={{title: 'Overview'}}
    />
  </Stack.Navigator>
);

export default CoinsNavigator;
