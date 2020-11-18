import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, #root {
    background: #fff;
    color: #3D3D4D;
    -webkit-font-smoothing: antialiased;
    height: calc(100vh - 72px);
    margin-top: 72px;
    height: 100%;
    min-height: calc(100vh - 72px);
    min-width: 330px;
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

export const Wrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  min-height: calc(100vh - 72px);
`;

export const Content = styled.div`
  justify-content: center;
  display: flex;

  box-shadow: rgb(220, 220, 220) 0px 0rem 1rem;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 72px);
  min-width: 330px;
`;
