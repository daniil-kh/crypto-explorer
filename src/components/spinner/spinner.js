import React from 'react';
import {ActivityIndicator, View} from 'react-native';

import COLORS from '../../constants/colors';

const Spinner = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.secondaryBlack,
      width: '100%',
    }}>
    <ActivityIndicator size="large" color={COLORS.primaryAqua} />
  </View>
);

export default Spinner;
