import styled from 'styled-components';
import { theme } from '../../common/theme';

export const SearcherContainer = styled.div`
  border-radius: 5px;
  background-color: ${theme.white};
  padding: 50px;
  width: 100%;
  max-width: 750px;
  margin: 20px;
`;

export const Title = styled.h3`
  color: ${theme.secondary};
  margin: 20px;
  text-align: center;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin-top: 20px;
  display: inline-block;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid ${theme.grey};
  &:focus {
    border-color: ${theme.primary};
    box-shadow: 0px 0px 2px red;
  }
`;
