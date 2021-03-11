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
    height: 50,
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
  list: {
    width: '90%',
  },
  tickersText: {
    fontSize: 14,
  },
  tickersHeaderStyle: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.lightBlack,
    marginBottom: 5,
  },

  tickersRowStyle: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});

export default styles;
