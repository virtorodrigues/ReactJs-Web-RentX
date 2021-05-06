import React from 'react';
import { Container, Scheduleds, FavoritCar, Header } from './styles';

import profile from '../../../assets/profile.svg';
import CardCar from '../../../components/CardCarClosed';

const ProfileDetail: React.FC = () => (
  <>
    <Header>asdads</Header>
    <Container>
      <img src={profile} alt="" />
      <strong>Tiago Luchtenberg</strong>
      <Scheduleds>
        <span>Agendamentos feitos</span>
        <p>05</p>
      </Scheduleds>
      <FavoritCar>
        <div>
          <span>Carro favorito</span>
          <p>Ultilizado 2 vezes</p>
        </div>
        <CardCar />
      </FavoritCar>
    </Container>
  </>
);

export default ProfileDetail;
