import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 56px;
  background: #dc1637;
  border: 0;
  color: #fff;

  &:hover {
    background: ${shade(0.2, '#dc1637')};
  }
`;
