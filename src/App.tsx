import React from 'react';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';
import './App.css';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
      <ToastContainer />
      <GlobalStyle />
    </AuthProvider>
  </>
);

export default App;
