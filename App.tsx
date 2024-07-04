/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {AppRouter} from './src/navigation/AppRouter.tsx';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
