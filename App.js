import React from 'react';
import {Provider} from 'react-redux';

import store from './src/redux/store';

import RootNavigator from './src/navigation/root.navigator';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
