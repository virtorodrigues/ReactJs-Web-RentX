import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { RefObject } from 'react';
import ButtonPrimary from '../ButtonPrimary';
import InputPassword from '../InputPassword';
import { Container } from './styles';

interface SignUpPasswordProps {
  handleSubmit(passwords: object): Promise<void>;
  formRef: RefObject<FormHandles>;
}

const SignUpPassword: React.FC<SignUpPasswordProps> = ({
  formRef,
  handleSubmit,
}) => {
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Container>
        <strong>02. Senha</strong>
        <div>
          <InputPassword name="password" placeholder="Senha" />
          <InputPassword name="repeatPassword" placeholder="Repita a senha" />
        </div>
      </Container>
      <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
    </Form>
  );
};
export default SignUpPassword;
