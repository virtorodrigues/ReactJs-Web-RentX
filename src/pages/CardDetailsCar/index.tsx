import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import SignUpData from '../../components/SignUpData';
import SignUpPassword from '../../components/SignUpPassword';
import { TOTALSTEPSTOSIGNUP } from '../../constants/TotalSteps';

import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import ListCar from '../../components/ListCar';
import CardCarOpened from '../../components/CardCarOpened';

const CardDetailsCar: React.FC = () => {
  return (
    <Container>
      <CardCarOpened />
    </Container>
  );
};
export default CardDetailsCar;
