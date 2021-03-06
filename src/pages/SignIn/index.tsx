import React, { useCallback, useRef, useContext } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrros from '../../utils/getValidadionErrors';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { AuthContext } from '../../context/AuthContext';

import logoImg from '../../assets/logo.svg';

interface SigninFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, signIn } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = useCallback(
    async (data: SigninFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().email().required('E-mail obrigatório'),
          password: Yup.string().required('Senha obrigatória'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        signIn({ email: data.email, password: data.password });
      } catch (err) {
        console.log(err);

        const errors = getValidationErrros(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Go Barber" srcSet="" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        </Form>
        <a href="http://">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
