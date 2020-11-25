import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../components/ToastContainer';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description: string;
}

interface ToastInterfaceContext {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastInterfaceContext>(
  {} as ToastInterfaceContext,
);

const ToastProvider: React.FC = ({ children }) => {
  /** array pq podemos ter vários toast ao mesmo tempo */
  const [messages, setMessage] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();
      const toast = {
        id,
        type,
        title,
        description,
      };
      setMessage([...messages, toast]);
    },
    [messages],
  );

  const removeToast = useCallback((id: string) => {
    /**
     * o setMessage filtra apenas os ids diferentes do recebido
     */
    setMessage(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastInterfaceContext {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a Toast Provider');
  }
  return context;
}

export { ToastProvider, useToast };
