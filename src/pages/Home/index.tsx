import React from 'react';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';

import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <h1>Seja Bem-vindo</h1>
    <span>O que você deseja fazer?</span>

    <div>
      <a href="/signin">
        <ButtonPrimary>Login</ButtonPrimary>
      </a>
      <a href="/signup">
        <ButtonSecondary>Cadastro</ButtonSecondary>
      </a>
    </div>
  </Container>
);

export default Home;