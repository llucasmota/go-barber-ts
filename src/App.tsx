import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import './App.css';

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
