import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiMail } from 'react-icons/fi';
import * as Yup from 'yup';
import ButtonPrimary from '../../components/ButtonPrimary';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  const formRef = useRef<FormHandles>(null);

  const toggleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('Nome obrigatório.'),
        password: Yup.string().required('E-mail obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <strong>Estamos quase lá.</strong>
        <span>Faça seu login para começar uma experiência incrível.</span>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <InputPassword name="password" placeholder="Senha" />

          <section>
            <Checkbox toggleChecked={toggleChecked}>Lembrar-me</Checkbox>
            <p>Esqueci minha senha</p>
          </section>
          <ButtonPrimary type="submit">Login</ButtonPrimary>
        </Form>
      </Content>
    </Container>
  );
};
export default SignIn;
