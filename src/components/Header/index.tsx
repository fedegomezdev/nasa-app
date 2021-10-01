import React from 'react';
import Searcher from '../Searcher';
import { HeaderContainer, RegularFont, TitleContainer } from './styles';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <TitleContainer>
          <h2>
            Mars <RegularFont>Explorer</RegularFont>
          </h2>
          <h3>
            <RegularFont>Search Photos</RegularFont>
          </h3>
        </TitleContainer>
        <Searcher />
      </HeaderContainer>
    </header>
  );
};

export default Header;
