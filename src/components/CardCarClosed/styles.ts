import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.a`
  background: #f4f5f6;
  color: #000;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 24px;
  text-decoration: none;

  justify-content: space-between;

  &:hover {
    transform: translateX(10px);
    background: ${shade(0.1, '#f4f5f6')};
  }

  transition: 0.4s;

  cursor: pointer;
`;

export const TitleCar = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  span {
    color: #aeaeb3;
    margin-bottom: 4px;
    font-size: 10px;
  }

  strong {
    color: #47474d;
    font-size: 15px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InformationsToLocate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
  }

  span {
    color: #aeaeb3;
    margin-bottom: 5px;
    font-size: 10px;
  }

  strong {
    color: #dc1637;
    font-size: 15px;
  }
`;
