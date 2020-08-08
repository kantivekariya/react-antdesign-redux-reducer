import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './antd.css';
import './App.scss';
import Routes from './routes/Routes';
import configureStore from './redux/store/configureStore';


const store = configureStore();
const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </>
  );
}

export default App;
