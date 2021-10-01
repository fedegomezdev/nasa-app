import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/images/NASA.png';

const Header = () => {
  return (
    <header>
      <Link to="/">
        <figure style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
          <img alt="Nasa App" src={logo} style={{ height: '100px', width: '120px' }} />
        </figure>
      </Link>
    </header>
  );
};

export default Header;
