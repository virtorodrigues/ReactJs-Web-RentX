import React from 'react';

import ProfileDetail from '../../components/ProfileDetail';
import ProfileEdit from '../../components/ProfileEdit';

import { Container } from './styles';

const Home: React.FC = () => (
  <Container>
    <ProfileDetail />
  </Container>
);

export default Home;