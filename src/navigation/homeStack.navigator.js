import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import HomeNavigator from './home.navigator';
import CoinsLoader from '../components/coins-loader/coins-loader';
import CoinDetailsHeader from '../components/coin-details-header/coin-details-header';
import CoinsCurrency from '../screens/coins-currency/coins-currency.screen';
import CoinDetailsInnerNavigator from './coin-detail-inner.navigator';
import IconButton from '../components/icon-button/icon-button';

import {
  GetCoinExchangeRateStart,
  LoadCoinDetailStart,
} from '../redux/coins/coins.actions';

const CoinDetailsScreenWithLoader = () => (
  <CoinsLoader>
    <CoinDetailsInnerNavigator />
  </CoinsLoader>
);

import COLORS from '../constants/colors';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCoinExchangeRateStart('bitcoin'));
  }, []);

  return (
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
          const {shortName, fullName, imageUrl, id} = route.params;

          return {
            headerTitle: () => (
              <CoinDetailsHeader
                fullName={fullName}
                shortName={shortName}
                imageUrl={imageUrl}
              />
            ),
            headerRight: () => (
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
          };
        }}
      />
      <Stack.Screen
        name="CoinsCurrencyList"
        component={CoinsCurrency}
        options={{title: 'Select Coin'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
