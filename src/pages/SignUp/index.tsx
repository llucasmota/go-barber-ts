import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiLock, FiUser, FiMail, FiArrowDownLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrros from '../../utils/getValidadionErrors';
import { Container, Content, Background, AnimationContent } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string()
          .email('O e-mail é obrigatório')
          .required('e-mail obrigatório'),
        password: Yup.string().min(6, 'No minimo 6 digitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);

      const errors = getValidationErrros(err);

      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Background />
      <AnimationContent>
        <Content>
          <img src={logoImg} alt="Go Barber" srcSet="" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input icon={FiUser} type="text" name="name" placeholder="Nome" />
            <Input
              icon={FiMail}
              type="text"
              name="email"
              placeholder="E-mail"
            />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Password"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">
            <FiArrowDownLeft />
            Voltar para o Logon
          </Link>
        </Content>
      </AnimationContent>
    </Container>
  );
};
export default SignUp;
