import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: COLORS.secondaryBlack,
  },
  card: {
    width: '99%',
    paddingHorizontal: 15,
    paddingTop: 5,
  },
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
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  gridRow: {
    flexDirection: 'row',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  cell: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.primaryAqua,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
