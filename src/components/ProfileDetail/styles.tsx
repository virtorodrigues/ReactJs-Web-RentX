import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  max-width: 500px;
  width: 100%;

  > img {
    margin-bottom: 24px;
    margin-top: -90px;
  }

  > strong {
    color: #3d3d4d;
    font-size: 30px;
  }
`;

export const Scheduleds = styled.div`
  margin-top: 44px;
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  > span {
    color: #7a7a80;
    font-size: 15px;
  }

  > p {
    font-size: 15px;
    color: #47474d;
  }
`;

export const Header = styled.div`
  background: #1b1b1f;
  height: 200px;
  width: 100%;
`;

export const FavoritCar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > div {
    margin: 27px 0 16px 0;

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  > span {
    color: #7a7a80;
    font-size: 15px;
  }

  > p {
    color: #47474d;
    font-size: 15px;
  }
`;
