import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AboutScreen from '../screens/about/about.screen';

import COLORS from '../constants/colors';

const Stack = createStackNavigator();

const AboutNavigator = () => (
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
      name="AboutDetails"
      component={AboutScreen}
      options={{title: 'About Us'}}
    />
  </Stack.Navigator>
);

export default AboutNavigator;
