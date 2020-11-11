import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  //align-items: stretch;

  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  strong {
    font-size: 40px;
    margin-bottom: 24px;
  }

  span {
    color: #7a7a80;
    font-size: 15px;
    margin-bottom: 80px;
  }

  form {
    display: flex;
    flex-direction: column;

    section {
      margin-top: 34px;
      display: flex;
      justify-content: space-between;

      p {
        color: #737380;
        font-size: 13px;
        cursor: pointer;
      }
    }

    > button {
      height: 56px;
      margin-top: 34px;
      background: #dc1637;
      border: 0;
      color: #fff;
    }
  }
`;
