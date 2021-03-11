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
    width: '100%',
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

  percentageText: {
    fontSize: 15,
  },

  labelText: {
    color: COLORS.textAqua,
  },

  header: {
    backgroundColor: COLORS.lightBlack,
    paddingHorizontal: 5,
  },

  flex: {
    flex: 1,
  },
});

export default styles;
