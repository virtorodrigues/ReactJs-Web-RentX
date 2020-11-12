import React, { RefObject } from 'react';
import { FiUser, FiMail, FiFileMinus } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import ButtonPrimary from '../ButtonPrimary';
import { Container } from './styles';
import Input from '../Input';

interface SignUpDataProps {
  handleSubmit: (data: object) => Promise<void>;
  formRef: RefObject<FormHandles>;
}

const SignUpData: React.FC<SignUpDataProps> = ({ formRef, handleSubmit }) => {
  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Container>
          <strong>01. Dados</strong>
          <div>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="cpf" icon={FiFileMinus} placeholder="CPF" />
          </div>
        </Container>
        <ButtonPrimary type="submit">Próximo</ButtonPrimary>
      </Form>
    </>
  );
};

export default SignUpData;
