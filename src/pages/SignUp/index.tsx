import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import SignUpData from '../../components/SignUpData';
import SignUpPassword from '../../components/SignUpPassword';
import { TOTALSTEPSTOSIGNUP } from '../../constants/TotalSteps';

import { Container, Content } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {
  const [step, setStep] = React.useState(1);
  const formRefData = useRef<FormHandles>(null);
  const formRefPassword = useRef<FormHandles>(null);

  const handleSubmitData = useCallback(
    async (data: object) => {
      try {
        formRefData.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório.'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digíte um e-mail válido.'),
          cpf: Yup.string().required('CPF obrigatório.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (step < TOTALSTEPSTOSIGNUP) {
          setStep(step + 1);
        }
      } catch (err) {
        console.log(err);

        const errors = getValidationErrors(err);
        formRefData.current?.setErrors(errors);
      }
    },
    [step],
  );

  const handleSubmitPassword = useCallback(
    async (data: object) => {
      try {
        formRefPassword.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Senha obrigatória.'),
          repeatPassword: Yup.string().required(
            'Repetir a senha é obrigatório',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        if (step < TOTALSTEPSTOSIGNUP) {
          setStep(step + 1);
        }
      } catch (err) {
        const errors = getValidationErrors(err);
        formRefPassword.current?.setErrors(errors);
      }
    },
    [step],
  );

  return (
    <Container>
      <Content>
        <h1>Crie sua conta</h1>
        <span>Faça seu cadastro de forma rápida e fácil.</span>

        {(step === 1 && (
          <SignUpData handleSubmit={handleSubmitData} formRef={formRefData} />
        )) || (
            <SignUpPassword
              handleSubmit={handleSubmitPassword}
              formRef={formRefPassword}
            />
          )}
      </Content>
    </Container>
  );
};
export default SignUp;
