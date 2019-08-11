import styled from 'styled-components';
import { accent } from 'constants/theme';

export const Container = styled.div`
  position: relative;
  text-align: center;
  color: #fff;
  transition: display 0.3s ease;

  display: ${({ hasBeenVisible }) => (hasBeenVisible ? 'block' : 'none')};

  iframe {
    width: 100%;
    height: 80vh;
  }
`;
