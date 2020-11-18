import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 330px;

  padding: 24px;
  max-width: 1370px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 340px;

  h1 {
    font-size: 40px;
    margin-bottom: 24px;
  }

  span {
    color: #7a7a80;
    font-size: 15px;
    margin-bottom: 80px;
  }
`;
