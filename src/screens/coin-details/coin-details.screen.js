import React, {useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Logo from '../../components/logo/logo';
import DefaultText from '../../components/default-text/default-text';
import PercentageText from '../../components/percentage-text/percentage-text';
import PriceText from '../../components/price-text/price-text';
import IconButton from '../../components/icon-button/icon-button';
import Converter from '../../components/converter/converter';
import Grid from '../../components/grid/grid';
import LabeledRow from '../../components/labeled-row/labeled-row';

import {selectedCoinSelector} from '../../redux/coins/coins.selectors';
import {LoadCoinDetailStart} from '../../redux/coins/coins.actions';

import styles from './styles';

const CoinDetailsScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedCoin = useSelector(selectedCoinSelector);

  const {
    id,
    image,
    name: fullName,
    symbol: shortName,
    market_data,
  } = selectedCoin;
  const {large: imageUrl} = image;
  const {
    current_price: {usd: current_price_usd},
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_14d,
    price_change_percentage_30d,
    price_change_percentage_60d,
    price_change_percentage_1y,
    price_change_percentage_1h_in_currency: {
      usd: price_change_percentage_1h_in_currency_usd,
    },
    market_cap_rank,
    market_cap: {usd: market_cap_usd},
    total_volume: {usd: total_volume_usd},
    high_24h: {usd: high_24h_usd},
    low_24h: {usd: low_24h_usd},
    circulating_supply,
    total_supply,
    fully_diluted_valuation: {usd: fully_diluted_valuation_usd},
    ath: {usd: ath_usd},
    ath_change_percentage: {usd: ath_change_percentage_usd},
    ath_date: {usd: ath_date_usd},
    atl: {usd: atl_usd},
    atl_change_percentage: {usd: atl_change_percentage_usd},
    atl_date: {usd: atl_date_usd},
  } = market_data;

  useEffect(() => {
    navigation.setOptions({
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
    });
  }, [fullName, shortName]);

  const PriceChangeData = {
    priceChange: [
      price_change_percentage_24h,
      price_change_percentage_7d,
      price_change_percentage_14d,
      price_change_percentage_30d,
      price_change_percentage_60d,
      price_change_percentage_1y,
    ],
    headerData: ['24H', '7D', '14D', '30D', '60D', '1Y'],
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        <View style={styles.header}>
          <View style={styles.row}>
            <PriceText text={current_price_usd} styleText={{fontSize: 30}} />
            <PercentageText
              text={price_change_percentage_1h_in_currency_usd}
              styleText={{fontSize: 14}}
            />
          </View>
          <View style={styles.row}>
            <Converter
              converterRate={current_price_usd}
              currency={shortName.toUpperCase()}
            />
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 115}}>
          <View style={styles.row}>
            <DefaultText text={'Here will be price chart'} />
          </View>
          <View style={styles.row}>
            <DefaultText text={'Here will be options for price chart'} />
          </View>
          <Grid
            style={{flex: 1, width: '100%'}}
            headerData={PriceChangeData.headerData}
            data={PriceChangeData.priceChange}
            numOfRows={1}
            cellContainerStyle={styles.cell}
            renderItem={(item) => (
              <PercentageText text={item} styleText={styles.percentageText} />
            )}
            renderHeaderItem={(item) => (
              <DefaultText
                styleContainer={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                text={item}
              />
            )}
            keyExtractor={(item) => item}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Market cap rank'}
            value={market_cap_rank}
            type="default"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Market cap'}
            value={market_cap_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Trading volume'}
            value={total_volume_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'24H High'}
            value={high_24h_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'24H Low'}
            value={low_24h_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Available supply'}
            value={circulating_supply}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Total supply'}
            value={total_supply}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Fully diluted valuation'}
            value={fully_diluted_valuation_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'All-Time High'}
            value={ath_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Since All-Time High'}
            value={ath_change_percentage_usd}
            type="percent"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'All-Time High Date'}
            value={new Date(Date.parse(ath_date_usd)).toDateString()}
            type="default"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'All-Time Low'}
            value={atl_usd}
            type="price"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'Since All-Time Low'}
            value={atl_change_percentage_usd}
            type="percent"
            styleText={styles.labelText}
          />
          <LabeledRow
            style={styles.textRow}
            title={'All-Time Low Date'}
            value={new Date(Date.parse(atl_date_usd)).toDateString()}
            type="default"
            styleText={styles.labelText}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default CoinDetailsScreen;

/*

*/
