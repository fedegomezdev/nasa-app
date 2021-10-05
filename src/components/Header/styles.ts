import styled from 'styled-components';
import image from '../../resources/images/bg-mars.jpg';

export const HeaderContainer = styled.div`
  background-image: url(${image});
  background-size: 2100px;
  background-position: top center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 0 150px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 50px;
  text-align: center;
  &:hover {
    cursor: pointer;
  }
`;

export const RegularFont = styled.span`
  font-weight: 400;
`;
