import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './context/AuthContext';
import './App.css';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      <GlobalStyle />
    </AuthProvider>
  </>
);

export default App;
