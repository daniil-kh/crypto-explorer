import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import HomeNavigator from './home.navigator';
import AboutNavigator from './about.navigator';

import COLORS from '../constants/colors';

const Drawer = createDrawerNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: COLORS.primaryAqua,
        inactiveTintColor: COLORS.secondaryAqua,
        activeBackgroundColor: COLORS.primaryBlack,
        inactiveBackgroundColor: COLORS.primaryBlack,
        itemStyle: {
          elevation: 5,
        },
      }}
      drawerStyle={{backgroundColor: COLORS.secondaryBlack}}>
      <Drawer.Screen name="Home" component={HomeNavigator} />
      <Drawer.Screen name="About" component={AboutNavigator} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
