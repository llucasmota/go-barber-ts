import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface SigninCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SigninCredentials): Promise<void>;
}

interface AuthState {
  user: object;
  token: string;
}
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  /**
   * Função que realizará a autenticação
   */
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });

    console.log(response.data);
  }, []);
  return (
    <AuthContext.Provider value={{ name: 'Lucas', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
