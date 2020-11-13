import styled from 'styled-components';

export const Container = styled.div`
  background: #1b1b1f;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: #f4f5f6;

  h1 {
    margin-bottom: 24px;
  }

  > div {
    margin-top: 170px;
    display: flex;

      a {
        & + a {
          margin-left: 20px;
        }
        width: 156px;
      }
    }
  }
`;
