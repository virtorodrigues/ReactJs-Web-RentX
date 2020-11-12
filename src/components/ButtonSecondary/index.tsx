import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonSecondary: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default ButtonSecondary;
