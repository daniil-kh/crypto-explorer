import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';

import DrawerToggleButton from '../../components/drawer-toggle-button/drawer-toggle-button';
import Converter from '../../components/converter/converter';

import styles from './styles';

const ConverterScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <DrawerToggleButton onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Converter converterRate={2} />
    </View>
  );
};

export default ConverterScreen;
