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
`;
