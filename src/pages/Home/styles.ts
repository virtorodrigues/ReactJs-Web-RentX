import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: #000;

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
