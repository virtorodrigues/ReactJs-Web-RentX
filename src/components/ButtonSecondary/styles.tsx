import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 56px;
  background: #29292e;
  border: 0;
  color: #fff;
  width: 100%;

  &:hover {
    background: ${shade(0.2, '#29292E')};
  }
`;
