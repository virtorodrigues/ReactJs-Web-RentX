import React from 'react';
import { Styled } from './styles';

interface InputProps {
  toggleChecked: () => void;
}

const Checkbox: React.FC<InputProps> = ({ toggleChecked, children }) => (
  <Styled onClick={toggleChecked}>
    <input type="checkbox" />
    <label htmlFor="checkbox">{children}</label>
  </Styled>
);

export default Checkbox;
