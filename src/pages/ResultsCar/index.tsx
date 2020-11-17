import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import SignUpData from '../../components/SignUpData';
import SignUpPassword from '../../components/SignUpPassword';
import { TOTALSTEPSTOSIGNUP } from '../../constants/TotalSteps';

import { Container, Content } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import ListCar from '../../components/ListCar';

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
