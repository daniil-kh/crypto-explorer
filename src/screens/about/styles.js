import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.secondaryBlack,
  },

  appName: {
    fontSize: 40,
  },
  developerName: {
    fontSize: 20,
  },
});

export default styles;
