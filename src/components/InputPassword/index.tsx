import React, {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputPassword: React.FC<InputProps> = ({ name, ...rest }) => {
  const [isClickedToSeePassword, setIsClickedToSeePassword] = React.useState(
    false,
  );
  const typeInput = isClickedToSeePassword ? 'text' : 'password';
  const { fieldName, defaultValue, error, registerField } = useField(name);
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isErrored={!!error} isFocused={isFocused} isFilled={isFilled}>
      <div>
        <FiLock size={20} />
      </div>
      <input
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        ref={inputRef}
        defaultValue={defaultValue}
        type={typeInput}
        {...rest}
      />
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
