import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AppProvider from './hooks/index';
import ToastContainer from './components/ToastContainer';
import './App.css';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
      <GlobalStyle />
    </AppProvider>
  </>
);

export default App;
