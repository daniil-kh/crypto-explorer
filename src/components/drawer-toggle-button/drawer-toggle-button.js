import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import COLORS from '../../constants/colors';

const DrawerToggleButton = (props) => {
  return (
    <View style={{marginLeft: 10}}>
      <Icon
        name="menu-outline"
        color={COLORS.primaryBlack}
        size={30}
        {...props}
      />
    </View>
  );
};

export default DrawerToggleButton;
