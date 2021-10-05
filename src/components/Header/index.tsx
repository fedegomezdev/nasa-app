import React from 'react';
import { useHistory } from 'react-router';
import Searcher from '../Searcher';
import { HeaderContainer, RegularFont, TitleContainer } from './styles';

const Header = () => {
  const history = useHistory();
  const goHome = () => history.push('/');

  return (
    <header>
      <HeaderContainer>
        <TitleContainer onClick={goHome}>
          <h1>
            Mars <RegularFont>Explorer</RegularFont>
          </h1>
          <h2>
            <RegularFont>Search Photos</RegularFont>
          </h2>
        </TitleContainer>
        <Searcher />
      </HeaderContainer>
    </header>
  );
};

export default Header;
