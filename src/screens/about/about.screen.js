import React, {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';

import DefaultText from '../../components/default-text/default-text';

import styles from './styles';

const AboutScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <DefaultText text={'CryptoExplorer'} styleText={styles.appName} />
      <DefaultText
        text={'Developed by Daniil Khmurovich'}
        styleText={styles.developerName}
      />
    </View>
  );
};

export default AboutScreen;
