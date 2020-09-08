import React from 'react';
import {
  FiLogIn,
  FiLock,
  FiUser,
  FiMail,
  FiArrowDownLeft,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Go Barber" srcSet="" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} type="text" name="user" placeholder="User" />

          <Input icon={FiMail} type="text" name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="http://">
          <FiArrowDownLeft />
          Criar Conta
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
