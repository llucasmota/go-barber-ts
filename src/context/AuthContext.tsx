import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface SigninCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
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
   * Verificar se o localStorage está preenchido com os dados, caso sim retorna
   */
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@goBarber:user');
    const token = localStorage.getItem('@goBarber:token');

    if (user && token) {
      return { user: JSON.parse(user), token };
    }
    return {} as AuthState;
  });
  /**
   * Função que realizará a autenticação
   */
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    /**
     * Realizo a autenticação e guardo no localStorage o token e o user
     */
    localStorage.setItem('@goBarber:token', token);
    localStorage.setItem('@goBarber:user', JSON.stringify(user));

    setData({ user, token });
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
