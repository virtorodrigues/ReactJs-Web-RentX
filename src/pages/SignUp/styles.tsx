import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  h1 {
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
    width: 340px;

    strong {
      font-size: 20px;
      margin-bottom: 24px;
      display: flex;
    }

    > div {
      margin-bottom: 34px;
    }
  }
`;
