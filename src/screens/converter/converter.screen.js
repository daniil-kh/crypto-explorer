import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import DrawerToggleButton from '../../components/drawer-toggle-button/drawer-toggle-button';
import Converter from '../../components/converter/converter';

import {
  currentExchangeRateSelector,
  selectedConverterCoinSelector,
} from '../../redux/coins/coins.selectors';

import styles from './styles';

const ConverterScreen = () => {
  const converterRate = useSelector(currentExchangeRateSelector);
  const selectedCoin = useSelector(selectedConverterCoinSelector);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Converter
        converterRate={converterRate?.usd}
        currency={selectedCoin?.symbol?.toUpperCase()}
        onPressCoin={() => navigation.navigate('CoinsCurrencyList')}
      />
    </View>
  );
};

export default ConverterScreen;
