import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #1B1B1F;
  padding: 24px;
  max-width: 1370px;
  color: #F4F5F6;

  img {
    margin-bottom: 120px;
  }

  h1 {
    font-size: 40px;
  }

  span {
    color: #DEDEE3;
    margin-top: 24px;
    font-size: 15px;
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
