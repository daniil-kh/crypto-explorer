import React from 'react';
import {View} from 'react-native';

import Logo from '../logo/logo';
import DefaultText from '../default-text/default-text';

import styles from './styles';

const CoinDetailsHeader = ({fullName, shortName, imageUrl}) => {
  return (
    <View style={styles.headerTitle}>
      <Logo imageUrl={imageUrl} style={styles.headerTitleLogo} />
      <DefaultText
        text={fullName[0].toUpperCase() + fullName.slice(1)}
        styleContainer={styles.headerTitleContent}
        styleText={styles.headerTitleText}
      />
      <DefaultText
        text={`(${shortName.toUpperCase()})`}
        styleContainer={styles.headerTitleContent}
        styleText={styles.headerTitleText}
      />
    </View>
  );
};

export default CoinDetailsHeader;
