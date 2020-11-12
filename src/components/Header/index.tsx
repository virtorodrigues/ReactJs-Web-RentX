import React from 'react';
import {
  FiArrowLeft,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from 'react-icons/fi';
import { Container, Content, OptionsHeader, Logo } from './styles';

import logoRentX from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <Content>
      <Logo>
        <a href="/">
          <img src={logoRentX} alt="" />
        </a>
        <button type="button">
          <FiArrowLeft size={20} color="rgb(225, 225, 230)" />
          voltar
        </button>
      </Logo>
      <OptionsHeader>
        <div>
          <FiInstagram size={20} color="rgb(225, 225, 230)" />
        </div>
        <div>
          <FiFacebook size={20} color="rgb(225, 225, 230)" />
        </div>
        <div>
          <FiTwitter size={20} color="rgb(225, 225, 230)" />
        </div>
      </OptionsHeader>
    </Content>
  </Container>
);

export default Header;
