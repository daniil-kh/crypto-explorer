import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryBlack,
  },

  list: {
    width: '90%',
  },

  listItem: {
    borderBottomColor: COLORS.primaryAqua,
    borderBottomWidth: 1,
    height: 60,
  },

  darkBackground: {
    backgroundColor: COLORS.primaryBlack,
  },
});

export default styles;
