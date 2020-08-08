import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './antd.css';
import './App.scss';
import Routes from './routes/Routes';


const App = () => {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
