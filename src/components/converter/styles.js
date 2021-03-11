import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

const height = 40;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '99%',
  },
  textInputContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 3,
  },
  textInput: {
    flex: 1,
    backgroundColor: COLORS.primaryBlack,
    color: COLORS.primaryAqua,
    borderRadius: 10,
    padding: 10,
    height: height,
    fontSize: 18,
    marginRight: 3,
  },
  textInputButton: {
    flex: 0.5,
    height: height,
  },
  iconButton: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    height: height,
  },
});

export default styles;
