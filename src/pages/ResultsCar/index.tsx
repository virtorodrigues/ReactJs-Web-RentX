import React from 'react';

import { Container, Content } from './styles';
import ListCar from './ListCar';

const ResultsCar: React.FC = () => {
  return (
    <Container>
      <Content>
        <h1>Resultados</h1>

        <ListCar />
      </Content>
    </Container>
  );
};
export default ResultsCar;
