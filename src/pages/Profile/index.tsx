import React from 'react';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from '../../components/ButtonSecondary';
import CardCarOpened from '../../components/CardCarOpened';

import ProfileDetail from '../../components/ProfileDetail';
import ProfileEdit from '../../components/ProfileEdit';

import logo from '../../assets/logo.svg';
import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <ProfileDetail />
    <ProfileEdit />
  </Container>
);

export default Home;
