import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/images/NASA.png';
import Searcher from '../Searcher';
import { HeaderContainer } from './styles';

const Header = () => {
  return (
    <header>
      <HeaderContainer>
        <div style={{ marginTop: '20px', alignItems: 'center' }}>
          <h2>
            <b>Mars</b> Explorer
          </h2>
          <h3>Search Photos</h3>
        </div>

        <Searcher />
      </HeaderContainer>
    </header>
  );
};

export default Header;
