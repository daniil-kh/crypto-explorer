import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 2,
    backgroundColor: COLORS.primaryBlack,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    fontSize: 16,
    color: COLORS.primaryAqua,
  },
  innerTouchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
