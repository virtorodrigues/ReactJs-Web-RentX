import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>;
}

const InputPassword: React.FC<InputProps> = ({ ...rest }) => {
  const [isClickedToSeePassword, setIsClickedToSeePassword] = React.useState(
    false,
  );
  const typeInput = isClickedToSeePassword ? 'text' : 'password';

  return (
    <Container>
      <div>
        <FiLock size={20} color="#7A7A80" />
      </div>
      <input type={typeInput} {...rest} />
      <button
        tabIndex={-1}
        type="button"
        onClick={() => setIsClickedToSeePassword(!isClickedToSeePassword)}
      >
        {(isClickedToSeePassword && <FiEye size={20} color="#aeaeb3" />) || (
          <FiEyeOff size={20} color="#aeaeb3" />
        )}
      </button>
    </Container>
  );
};

export default InputPassword;
