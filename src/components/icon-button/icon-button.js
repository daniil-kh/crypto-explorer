import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import COLORS from '../../constants/colors';

import styles from './styles';

const IconButton = ({name, color, size, onPress, style}) => {
  return (
    <View style={style}>
      <TouchableOpacity onPress={onPress} style={styles.innerTouchable}>
        <Icon
          name={name}
          color={color ? color : COLORS.primaryBlack}
          size={size ? size : 18}
        />
      </TouchableOpacity>
    </View>
  );
};

export default IconButton;
