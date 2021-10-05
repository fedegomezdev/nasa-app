import styled from 'styled-components';
import { theme } from '../../common/theme';

export const PhotoContainer = styled.div`
  aspect-ratio: 16 / 9;
  text-align: center;
  overflow: hidden;
  border-radius: 15px;
  &:hover {
    color: ${theme.secondary};
  }
`;
