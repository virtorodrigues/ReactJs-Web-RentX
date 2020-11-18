import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  //align-items: stretch;

  align-items: center;
  justify-content: center;
  min-width: 330px;

  padding: 42px;
  max-width: 1370px;
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
      margin: 34px 0;
      display: flex;
      justify-content: space-between;

      p {
        color: #737380;
        font-size: 13px;
        cursor: pointer;
      }
    }
  }
`;
