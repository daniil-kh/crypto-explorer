import React, {useEffect, useCallback, useState} from 'react';
import {View, FlatList, RefreshControl, Modal} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import DrawerToggleButton from '../../components/drawer-toggle-button/drawer-toggle-button';
import CoinCard from '../../components/coin-card/coin-card';
import IconButton from '../../components/icon-button/icon-button';
import FiltersModal from '../../components/filters-modal/filters-modal';

import {
  coinsSelector,
  isLoadingSelector,
} from '../../redux/coins/coins.selectors';
import {
  LoadCoinDetailStart,
  LoadCoinsStart,
  LoadNewCoinsPageStart,
} from '../../redux/coins/coins.actions';

import COLORS from '../../constants/colors';
import styles from './styles';

const CoinsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const coins = useSelector(coinsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
      ),
      headerRight: () => (
        <IconButton
          name={'ios-filter'}
          size={30}
          onPress={() => {}}
          style={{marginRight: 5}}
          onPress={() => setIsModalVisible(true)}
        />
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

  const ListFooter = () => (
    <View style={styles.buttonContainer}>
      <IconButton
        name={'chevron-back'}
        size={40}
        color={COLORS.primaryAqua}
        onPress={() => dispatch(LoadNewCoinsPageStart('prev'))}
      />
      <IconButton
        name={'chevron-forward'}
        size={40}
        color={COLORS.primaryAqua}
        onPress={() => dispatch(LoadNewCoinsPageStart('next'))}
      />
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <FiltersModal
        isVisible={isModalVisible}
        onDismiss={() => setIsModalVisible(false)}
        onSubmit={() => setIsModalVisible(false)}
      />

      <View style={{flex: 1}}>
        <FlatList
          data={coins}
          style={styles.list}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          removeClippedSubviews={true}
          showsVerticalScrollIndicator={false}
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
          ListFooterComponent={ListFooter}
          ListFooterComponentStyle={{width: '100%', flex: 1, height: 60}}
        />
      </View>
    </View>
  );
};

export default CoinsScreen;
