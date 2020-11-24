import React, { createContext, useCallback, useContext } from 'react';
import ToastContainer from '../components/ToastContainer';

interface ToastInterfaceContext {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastInterfaceContext>(
  {} as ToastInterfaceContext,
);

const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('addToast');
  }, []);

  const removeToast = useCallback(() => {
    console.log('removeToast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
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
