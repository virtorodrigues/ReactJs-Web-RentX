import React from 'react';
import { Styled } from './styles';

interface InputProps {
  checked?: boolean | undefined;
  toggleChecked: () => void;
}

const Checkbox: React.FC<InputProps> = ({
  checked,
  toggleChecked,
  children,
}) => (
    <Styled onClick={toggleChecked}>
      <input type="checkbox" checked={checked} />
      <label>{children}</label>
    </Styled>
  );

export default Checkbox;
