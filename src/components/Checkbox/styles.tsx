import styled from 'styled-components';

export const Styled = styled.div`
  display: flex;
  align-items: center;

  label {
    color: #737380;
    font-size: 13px;
    margin-left: 8px;
    cursor: pointer;
  }

  input {
    appearance: none;
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background: #ebebf0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:after {
      content: '';
      display: none;
      width: 8px;
      height: 8px;
      background: #fff;
    }

    &:checked {
      background: #000;
      transition: 0.2s;

      &:after {
        display: block;
      }
    }
  }
`;
