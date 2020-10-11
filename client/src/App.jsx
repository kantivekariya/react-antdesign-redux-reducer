import React from 'react';
import { Provider } from 'react-redux';
import './antd.css';
import './App.scss';
import Routes from './routes';
import configureStore from './redux/store/configureStore';
import { setupAxios } from './utils/axios-config';
import { onLocalLogin } from './redux/actions/auth/authentication';

setupAxios();
const store = configureStore();
store.dispatch(onLocalLogin());
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
