import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: COLORS.primaryBlack,
    borderRadius: 25,
    maxWidth: 50,
    maxHeight: 50,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
