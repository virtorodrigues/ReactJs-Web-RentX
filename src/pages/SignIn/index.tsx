import React, { useCallback } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import InputPassword from '../../components/InputPassword';
import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = useCallback(() => {
    setChecked(!checked);
  }, [checked]);

  return (
    <Container>
      <Content>
        <strong> Estamosquase lá.</strong>
        <span>Faça seu login para começar uma experiência incrível.</span>

        <form>
          <Input icon={FiMail} placeholder="E-mail" />
          <InputPassword icon={FiLock} placeholder="Senha" />

          <section>
            <Checkbox toggleChecked={toggleChecked} checked={checked}>
              Lembrar-me
            </Checkbox>
            <p>Esqueci minha senha</p>
          </section>
          <button type="submit">Login</button>
        </form>
      </Content>
    </Container>
  );
};
export default SignIn;
