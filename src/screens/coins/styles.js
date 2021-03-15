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

  contentContainer: {
    marginVertical: 10,
    padding: 10,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default styles;
