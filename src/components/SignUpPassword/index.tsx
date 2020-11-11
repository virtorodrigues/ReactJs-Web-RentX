import React from 'react';
import Button from '../Button';
import InputPassword from '../InputPassword';

const SignUpPassword: React.FC = () => (
  <>
    <div>
      <strong>02. Senha</strong>
      <InputPassword placeholder="Senha" />
      <InputPassword placeholder="Repita a senha" />
    </div>
    <Button type="submit">Cadastrar</Button>
  </>
);

export default SignUpPassword;
