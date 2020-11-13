import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  padding: 24px;

  justify-content: space-between;

  > div {
    & + div {
      margin-top: 24px;
    }
  }
`;
