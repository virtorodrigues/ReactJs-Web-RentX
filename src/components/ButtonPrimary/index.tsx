import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonPrimary: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default ButtonPrimary;
