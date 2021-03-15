import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import HomeStackNavigator from './homeStack.navigator';
import AboutNavigator from './about.navigator';

import {LoadAllAvailableCoinsStart} from '../redux/coins/coins.actions';

import COLORS from '../constants/colors';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoadAllAvailableCoinsStart());
  }, []);

  return (
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
        <Drawer.Screen name="Home" component={HomeStackNavigator} />
        <Drawer.Screen name="About" component={AboutNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
