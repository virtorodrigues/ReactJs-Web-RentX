import React from 'react';
import { FiCamera } from 'react-icons/fi';

import { Container, Details, TitleCar, InformationsToLocate } from './styles';

import lancer from '../../assets/lancer.svg';

const CardCar: React.FC = () => (
  <Container href="/card-opened">
    <Details>
      <TitleCar>
        <span>MITSUBISHI</span>
        <strong>Lancer Evo X</strong>
      </TitleCar>
      <InformationsToLocate>
        <div>
          <span>POR 3 DIAS</span>
          <strong>R$ 290</strong>
        </div>
        <FiCamera size={20} />
      </InformationsToLocate>
    </Details>
    <img src={lancer} alt="" />
  </Container>
);

export default CardCar;
