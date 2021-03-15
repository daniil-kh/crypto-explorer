import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleLogo: {
    height: 22,
    width: 22,
    marginRight: 2,
  },
  headerTitleContent: {
    marginHorizontal: 2,
  },
  headerTitleText: {
    color: COLORS.primaryBlack,
  },
});

export default styles;
