import React from 'react';
import { Container } from './styles';

import CardCar from '../CardCar';

const ListCar: React.FC = () => (
  <Container>
    <CardCar />
    <CardCar />
    <CardCar />
    <CardCar />
    <CardCar />
  </Container>
);

export default ListCar;
