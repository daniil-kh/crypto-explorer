import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import CoinDetailsPriceChartScreen from '../screens/coin-details/coin-details-price-chart';
import CoinDetailsExchangeScreen from '../screens/coin-details/coin-details-exchange';
import CoinDetailsScreenHeader from '../screens/coin-details/coin-details-header';

import COLORS from '../constants/colors';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const InnerTabNavigator = () => (
  <TopTab.Navigator
    tabBarOptions={{
      activeTintColor: COLORS.primaryAqua,
      inactiveTintColor: COLORS.secondaryAqua,
      activeBackgroundColor: COLORS.primaryBlack,
      inactiveBackgroundColor: COLORS.primaryBlack,
      style: {
        backgroundColor: COLORS.primaryBlack,
        borderTopColor: COLORS.primaryAqua,
      },
      indicatorStyle: {
        backgroundColor: COLORS.primaryAqua,
      },
    }}>
    <TopTab.Screen
      name={'PriceChart'}
      options={{title: 'Price Chart'}}
      component={CoinDetailsPriceChartScreen}
    />
    <TopTab.Screen name={'Exchange'} component={CoinDetailsExchangeScreen} />
  </TopTab.Navigator>
);

const CoinDetailsInnerNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      header: () => <CoinDetailsScreenHeader />,
      headerLeft: () => (
        <IconButton
          name="ios-refresh"
          onPress={() => dispatch(LoadCoinDetailStart(id))}
          size={30}
          style={{
            marginRight: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      ),
    }}>
    <Stack.Screen
      name="CoinDetailsInnerContent"
      component={InnerTabNavigator}
    />
  </Stack.Navigator>
);

export default CoinDetailsInnerNavigator;
