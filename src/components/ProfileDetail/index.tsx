import React from 'react';
import {
  FiArrowLeft,
  FiInstagram,
  FiFacebook,
  FiTwitter,
} from 'react-icons/fi';
import { Container, Scheduleds, FavoritCar } from './styles';

import profile from '../../assets/profile.svg';
import CardCar from '../CardCarClosed';

const ProfileDetail: React.FC = () => (
  <Container>
    <img src={profile} alt="" />
    <div>Tiago Luchtenberg</div>
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
);

export default ProfileDetail;
