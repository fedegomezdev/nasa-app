import styled from 'styled-components';
import { theme } from '../../common/theme';

export const ButtonContainer = styled.button`
  width: 100%;
  background-color: ${theme.primary};
  color: white;
  padding: 14px 20px;
  margin: 0px 15px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
