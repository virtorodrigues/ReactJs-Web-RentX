import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    <div>{Icon && <Icon size={20} color="#7A7A80" />}</div>
    <input type="text" {...rest} />
  </Container>
);

export default Input;
