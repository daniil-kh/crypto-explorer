import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    width: '90%',
  },
  textInput: {
    backgroundColor: COLORS.primaryBlack,
    color: COLORS.primaryAqua,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    width: '100%',
    height: 50,
    fontSize: 18,
  },
});

export default styles;
