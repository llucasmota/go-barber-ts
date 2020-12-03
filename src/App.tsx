import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import AppProvider from './hooks/index';
import './App.css';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
      <GlobalStyle />
    </AppProvider>
  </Router>
);

export default App;
