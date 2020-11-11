import React from 'react';
import { FiUser, FiMail, FiFileMinus } from 'react-icons/fi';
import Button from '../Button';
import Input from '../Input';

const SignUpData: React.FC = () => (
  <>
    <div>
      <strong>01. Dados</strong>
      <Input icon={FiUser} placeholder="Nome" />
      <Input icon={FiMail} placeholder="E-mail" />
      <Input icon={FiFileMinus} placeholder="CPF" />
    </div>
    <Button type="submit">Próximo</Button>
  </>
);

export default SignUpData;
