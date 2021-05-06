import React from 'react';
import { Container } from './styles';

import CardCar from '../../../components/CardCarClosed';

const ListCar: React.FC = () => (
  <Container>
    <CardCar />
    <CardCar />
    <CardCar />
  </Container>
);

export default ListCar;
