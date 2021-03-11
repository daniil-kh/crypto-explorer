import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ConverterScreen from '../screens/converter/converter.screen';
import CoinsLoader from '../components/coins-loader/coins-loader';

import COLORS from '../constants/colors';

const Stack = createStackNavigator();

const ConverterScreenWithSpinner = () => (
  <CoinsLoader>
    <ConverterScreen />
  </CoinsLoader>
);

const ConverterNavigator = () => (
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
      name="ConverterUtil"
      component={ConverterScreenWithSpinner}
      options={{title: 'Converter'}}
    />
  </Stack.Navigator>
);

export default ConverterNavigator;
