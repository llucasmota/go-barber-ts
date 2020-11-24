import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="info" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Ocorreu um erro</strong>
          <p>Não foi possível logar na aplicação</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="success" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Ocorreu um erro</strong>
          <p>Não foi possível logar na aplicação</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast type="error" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Ocorreu um erro</strong>
          <p />
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
