import React from 'react';
import { FiCamera } from 'react-icons/fi';

import { Carousel } from 'react-responsive-carousel';
import {
  Container,
  TitleDetails,
  TitleName,
  TitleMoney,
  AllDetailsCar,
  SchedulingDate,
  TotalToPay,
  Body,
} from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

import lancer from '../../assets/lancer.svg';
import forca from '../../assets/forca.svg';
import cambio from '../../assets/cambio.svg';
import gasolina from '../../assets/gasolina.svg';
import speed from '../../assets/speed.svg';
import up from '../../assets/up.svg';
import pessoas from '../../assets/pessoas.svg';
import seta from '../../assets/seta.svg';
import lambo from '../../assets/lambo.svg';
import ButtonPrimary from '../ButtonPrimary';

const CardCarOpened: React.FC = () => (
  <Container>
    <Body>
      <Carousel>
        <div>
          <img src={lambo} alt="" />
        </div>
        <div>
          <img src={lambo} alt="" />
        </div>
        <div>
          <img src={lambo} alt="" />
        </div>
      </Carousel>
      <TitleDetails>
        <TitleName>
          <span>LAMBORGHINI</span>
          <strong>Huracan</strong>
        </TitleName>
        <TitleMoney>
          <span>AO DIA</span>
          <strong>R$ 580</strong>
        </TitleMoney>
      </TitleDetails>
      <AllDetailsCar>
        <div>
          <img src={speed} alt="" />
          <span>380km/h</span>
        </div>
        <div>
          <img src={up} alt="" />
          <span>3.2s</span>
        </div>
        <div>
          <img src={forca} alt="" />
          <span>800 HP</span>
        </div>
      </AllDetailsCar>

      <AllDetailsCar>
        <div>
          <img src={gasolina} alt="" />
          <span>Gasolina</span>
        </div>
        <div>
          <img src={cambio} alt="" />
          <span>Auto</span>
        </div>
        <div>
          <img src={pessoas} alt="" />
          <span>2 pessoas</span>
        </div>
      </AllDetailsCar>

      <SchedulingDate>
        <div>
          <span>DE</span>
          <p>18 Julho 2020 </p>
        </div>
        <div>
          <img src={seta} alt="" />
        </div>
        <div>
          <span>DE</span>
          <p>18 Julho 2020 </p>
        </div>
      </SchedulingDate>
    </Body>

    <TotalToPay>
      <div>
        <div>
          <span>TOTAL</span>
          <p>R$ 580 x3 diárias</p>
        </div>
        <strong>R$ 2,900</strong>
      </div>
      <ButtonPrimary type="submit">Alugar agora</ButtonPrimary>
    </TotalToPay>
  </Container>
);

export default CardCarOpened;

/**
 *
 *  <Container>
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
 */
