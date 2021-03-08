import React, {useLayoutEffect, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import DrawerToggleButton from '../../components/drawer-toggle-button/drawer-toggle-button';
import CoinCard from '../../components/coin-card/coin-card';
import CoinsLoader from '../../components/coins-loader/coins-loader';

import {coinsSelector} from '../../redux/coins/coins.selectors';
import {
  LoadCoinsStart,
  LoadNewCoinsPageStart,
} from '../../redux/coins/coins.actions';

import styles from './styles';

const CoinsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const coins = useSelector(coinsSelector);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
      ),
    });
    dispatch(LoadCoinsStart());
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={coins}
        style={styles.list}
        renderItem={({item}) => <CoinCard coinData={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={() => dispatch(LoadNewCoinsPageStart())}
        onEndReachedThreshold={1}
        ListFooterComponent={CoinsLoader}
      />
    </View>
  );
};

export default CoinsScreen;
