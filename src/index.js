import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';
import React from 'react';
import { Toast } from 'react-native-redux-toast';
import { Provider } from 'react-redux';

import store from '~/store';

import App from './App';

const Root = () => (
  <Provider store={store}>
    <>
      <Toast />
      <App />
    </>
  </Provider>
);

export default Root;
