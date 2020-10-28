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
/**
 * Criação de um contexto onde é recebido como param:
 * @user
 * @signIn
 */
export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  /**
   * verificar se há token e user dentro do localStorage
   * Se sim: retorna
   * Senão: retorna um objeto do tipo AuthState
   */
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  /**
   * Realiza a requisição para server a fim de autenticar o cliente
   * Persiste os dados de autenticação no localStorage e retorna um componente
   * de contexto
   */
  const signIn = useCallback(async ({ email, password }): Promise<void> => {
    const response = await api.post('sessions', {
      email,
      password,
    });
    const { token, user } = response.data;
    localStorage.setItem('@GoBarber:token', token);
    localStorage.setItem('@GoBarber:user', JSON.stringify(user));

    setData({ token, user });
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
