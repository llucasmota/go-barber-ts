import React, { useCallback } from 'react';
import {
  FiLogIn,
  FiLock,
  FiUser,
  FiMail,
  FiArrowDownLeft,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { abort } from 'process';
import { Container, Content, Background } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('O e-mail é obrigatório'),
        password: Yup.string().min(
          6,
          'É obrigatório informar ao menos 6 digitos',
        ),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Go Barber" srcSet="" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} type="text" name="user" placeholder="Nome" />

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
