import React, { useCallback } from 'react';

import SignUpData from '../../components/SignUpData';
import SignUpPassword from '../../components/SignUpPassword';
import { TOTALSTEPSTOSIGNUP } from '../../constants/TotalSteps';

import { Container, Content } from './styles';

const SignUp: React.FC = () => {
  const [step, setStep] = React.useState(1);

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();

      if (step < TOTALSTEPSTOSIGNUP) {
        setStep(step + 1);
      }
    },
    [step],
  );

  return (
    <Container>
      <Content>
        <h1>Crie sua conta</h1>
        <span>Faça seu cadastro de forma rápida e fácil.</span>

        <form onSubmit={handleSubmit}>
          {(step === 1 && <SignUpData />) || <SignUpPassword />}
        </form>
      </Content>
    </Container>
  );
};
export default SignUp;
