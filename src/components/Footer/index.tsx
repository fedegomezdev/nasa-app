import React from 'react';
import { FooterContainer, Description } from './styles';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <Description>Federico G. {year} - &copy;</Description>
    </FooterContainer>
  );
};

export default Footer;
