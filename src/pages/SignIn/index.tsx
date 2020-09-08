import React from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.svg';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="Go Barber" srcSet="" />
      <form action="">
        <h1>Faça seu logon</h1>
        <Input icon={FiMail} type="text" name="email" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button type="submit">Entrar</Button>
        <a href="/">Esqueci minha senha</a>
      </form>
      <a href="http://">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
