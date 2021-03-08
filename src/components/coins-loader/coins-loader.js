import React from 'react';
import {useSelector} from 'react-redux';

import Spinner from '../spinner/spinner';

import {isLoadingSelector} from '../../redux/coins/coins.selectors';

const CoinsLoader = ({children}) => {
  const isLoading = useSelector(isLoadingSelector);

  return isLoading ? <Spinner /> : <>{children}</>;
};

export default CoinsLoader;
