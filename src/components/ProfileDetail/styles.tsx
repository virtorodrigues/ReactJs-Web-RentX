import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  max-width: 500px;
  width: 100%;

  img {
    margin-bottom: 24px;
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
`;
