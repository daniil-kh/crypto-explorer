import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

const Logo = ({imageUrl, style}) => {
  return (
    <View style={[styles.imageContainer, style]}>
      <Image source={{uri: imageUrl}} style={styles.image} />
    </View>
  );
};

export default Logo;
