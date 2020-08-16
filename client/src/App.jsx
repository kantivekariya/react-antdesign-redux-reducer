import React from 'react';
import { Provider } from 'react-redux';
import './antd.css';
import './App.scss';
import Routes from './routes';
import configureStore from './redux/store/configureStore';
import { setupAxios } from './utils/axios-config';

setupAxios();
const store = configureStore();
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
