import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  height: 100%;

  max-width: 740px;
  width: 100%;

  > a {
    & + a {
      margin-top: 8px;
    }
  }
`;
