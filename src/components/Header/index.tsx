import React from 'react';
import Searcher from '../Searcher';
import { HeaderContainer, RegularFont, TitleContainer } from './styles';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <TitleContainer>
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
