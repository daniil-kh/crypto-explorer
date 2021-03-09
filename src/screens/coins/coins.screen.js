import React, {useEffect, useCallback} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import DrawerToggleButton from '../../components/drawer-toggle-button/drawer-toggle-button';
import CoinCard from '../../components/coin-card/coin-card';

import {
  coinsSelector,
  isLoadingSelector,
} from '../../redux/coins/coins.selectors';
import {
  LoadCoinDetailStart,
  LoadCoinsStart,
} from '../../redux/coins/coins.actions';

import COLORS from '../../constants/colors';
import styles from './styles';

const CoinsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const coins = useSelector(coinsSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
      ),
    });
    dispatch(LoadCoinsStart());
  }, []);

  const renderItem = useCallback(
    ({item}) => (
      <CoinCard
        coinData={item}
        onPress={() => {
          dispatch(LoadCoinDetailStart(item.id));
          navigation.navigate('CoinDetail', {
            imageUrl: item.image,
            fullName: item.name,
            shortName: item.symbol,
            id: item.id,
          });
        }}
      />
    ),
    [coins],
  );

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={coins}
        style={styles.list}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        decelerationRate={0.5}
        refreshControl={
          <RefreshControl
            colors={[COLORS.primaryBlack]}
            progressBackgroundColor={COLORS.primaryAqua}
            refreshing={isLoading}
            onRefresh={() => dispatch(LoadCoinsStart())}
          />
        }
        getItemLayout={(data, index) => ({
          length: 60,
          offset: 60 * index,
          index,
        })}
      />
    </View>
  );
};

export default CoinsScreen;
