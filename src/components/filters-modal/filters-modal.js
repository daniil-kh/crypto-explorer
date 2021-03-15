import React, {useState} from 'react';
import {View, Modal} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {useDispatch} from 'react-redux';

import DefaultText from '../default-text/default-text';
import IconButton from '../icon-button/icon-button';

import {setFilters} from '../../redux/filters/filters.actions';

import styles from './styles';

import COLORS from '../../constants/colors';

const FiltersModal = ({isVisible, onSubmit, onDismiss}) => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({});

  return (
    <Modal
      visible={isVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={onDismiss}>
      <BlurView style={styles.absolute} blurType={'dark'} blurAmount={1} />
      <View style={styles.centeredView}>
        <View style={styles.contentContainer}>
          <View style={styles.row}>
            <DefaultText text={'Price'} />
            <View style={styles.buttonContainer}>
              <IconButton
                name={'arrow-down'}
                size={30}
                color={COLORS.primaryAqua}
                onPress={() => setFilter({price: 'desc'})}
              />
              <IconButton
                name={'arrow-up'}
                size={30}
                color={COLORS.primaryAqua}
                onPress={() => setFilter({price: 'asc'})}
              />
            </View>
          </View>
          <View style={styles.row}>
            <DefaultText text={'Price Change'} />
            <View style={styles.buttonContainer}>
              <IconButton
                name={'arrow-down'}
                size={30}
                color={COLORS.primaryAqua}
                onPress={() => setFilter({price_change: 'desc'})}
              />
              <IconButton
                name={'arrow-up'}
                size={30}
                color={COLORS.primaryAqua}
                onPress={() => setFilter({price_change: 'asc'})}
              />
            </View>
          </View>
          <View style={[styles.row, {justifyContent: 'center'}]}>
            <View
              style={[
                styles.buttonContainer,
                {width: '50%', justifyContent: 'space-between'},
              ]}>
              <IconButton
                name={'checkmark'}
                size={30}
                color={COLORS.primaryAqua}
                onPress={() => {
                  dispatch(setFilters(filter));
                  onSubmit();
                }}
              />
              <IconButton
                name={'close'}
                size={30}
                color={COLORS.primaryAqua}
                onPress={onDismiss}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FiltersModal;

//<BlurView style={styles.centeredView} blurType={'light'} blurAmount={10} />;
