import '~/config/ReactotronConfig';
import '~/config/StatusBarConfig';
import React, { Fragment } from 'react';
import { Toast } from 'react-native-redux-toast';
import { Provider } from 'react-redux';

import store from '~/store';

import App from './App';

const Root = () => (
  <Provider store={store}>
    <Fragment>
      <Toast />
      <App />
    </Fragment>
  </Provider>
);

export default Root;
