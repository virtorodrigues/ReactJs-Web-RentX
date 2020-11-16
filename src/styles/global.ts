import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #3D3D4D;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Archivo', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  p, span {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;

export const Wrapper = styled.div``;
