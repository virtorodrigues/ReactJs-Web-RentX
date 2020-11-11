import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  max-width: 1366px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  color: rgb(255, 255, 255);
  padding: 12px 0px;
`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 72px;
  padding: 0px 30px;
  background: rgb(32, 32, 36);
  top: 0px;
  z-index: 9998;
  transition: all 0.5s ease-in-out 0s;
  box-shadow: rgb(18, 18, 20) 0px 0rem 1rem;
  opacity: 1;
  transform: translateY(0px);
  visibility: visible;
`;

export const OptionsHeader = styled.div`
  display: flex;
  align-items: center;

  div {
    & + div {
      margin-left: 14px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    margin-left: 45px;
    padding: 8px;
    border-radius: 3px;
    font-size: 14px;
    max-height: 32px;
    font-weight: bold;
    color: rgb(225, 225, 230);
    cursor: pointer;
    text-transform: initial;
    transition: color 0.2s ease 0s;
    background: transparent;
    border: none;

    svg {
      margin-right: 13px;
    }
  }
`;
