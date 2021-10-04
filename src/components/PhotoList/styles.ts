import styled from 'styled-components';

export const PhotoListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin: 50px;
`;

export const ErrorText = styled.h3`
  text-align: center;
`;
