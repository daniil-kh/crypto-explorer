import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ConverterScreen from '../screens/converter/converter.screen';

import COLORS from '../constants/colors';

const Stack = createStackNavigator();

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
      component={ConverterScreen}
      options={{title: 'Converter'}}
    />
  </Stack.Navigator>
);

export default ConverterNavigator;
