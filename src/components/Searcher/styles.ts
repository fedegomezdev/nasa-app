import styled from 'styled-components';
import { theme } from '../../common/theme';

export const SearcherContainer = styled.div`
  border-radius: 5px;
  background-color: ${theme.white};
  padding: 20px;
  width: 500px;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  color: ${theme.secondary};
  margin: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #fc3d21;
  border-radius: 4px;
  box-sizing: border-box;
`;
