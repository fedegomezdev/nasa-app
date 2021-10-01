import React, { Fragment } from 'react';
import Footer from '../Footer';
import { GlobalStyle } from './styles';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
