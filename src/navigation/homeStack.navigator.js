import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigator from './home.navigator';
import CoinDetailsScreen from '../screens/coin-details/coin-details.screen';
import CoinsLoader from '../components/coins-loader/coins-loader';
import CoinDetailsHeader from '../components/coin-details-header/coin-details-header';

const CoinDetailsScreenWithLoader = () => (
  <CoinsLoader>
    <CoinDetailsScreen />
  </CoinsLoader>
);

import COLORS from '../constants/colors';

const Stack = createStackNavigator();

const HomeStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.primaryAqua,
      },
    }}>
    <Stack.Screen
      options={{headerShown: false}}
      name="Home"
      component={HomeNavigator}
    />
    <Stack.Screen
      name="CoinDetail"
      component={CoinDetailsScreenWithLoader}
      options={({route}) => {
        const {shortName, fullName, imageUrl} = route.params;

        return {
          headerTitle: () => (
            <CoinDetailsHeader
              fullName={fullName}
              shortName={shortName}
              imageUrl={imageUrl}
            />
          ),
        };
      }}
    />
    <Stack.Screen name="CoinsCurrencyList" component={} />
  </Stack.Navigator>
);

export default HomeStackNavigator;
