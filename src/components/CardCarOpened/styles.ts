import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;

  max-width: 400px;
  max-width: 400px;

  justify-content: space-between;
`;

export const Body = styled.div`
  padding: 24px 24px 0px 24px;
`;

export const TitleDetails = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  justify-content: space-between;
  margin: 24px 0;

  span {
    color: #aeaeb3;
    margin-bottom: 4px;
    font-size: 10px;
  }

  strong {
    color: #47474d;
    font-size: 25px;
  }
`;

export const TitleName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleMoney = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: #dc1637;
  }
`;

export const SchedulingDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0;

  div {
    display: flex;
    flex-direction: column;
    span {
      color: #aeaeb3;
      margin-bottom: 8px;
      font-size: 10px;
    }

    p {
      color: #dc1637;
      font-size: 15px;
    }
  }
`;

export const AllDetailsCar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    margin-top: 8px;
    background: #f4f5f6;

    width: 110px;
    padding: 24px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      font-size: 13px;
      color: #7a7a80;
      margin-top: 14px;
      display: block;
    }

    & + div {
      margin-left: 8px;
    }
  }
`;

export const TotalToPay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background: #f4f5f6;

  padding: 24px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;

    span {
      font-size: 10px;
      color: #a0a0b3;
      margin-bottom: 8px;
    }

    p {
      color: #47474d;
      font-size: 15px;
    }

    strong {
      color: #3d3d4d;
      font-size: 24px;
    }
  }
`;
