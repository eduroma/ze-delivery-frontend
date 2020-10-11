import React from 'react';

import logoImg from '../../assets/ze-white-logo.png';

import { Container } from './styles';

const Header: React.FC = ({ children }) => {

  return (
    <Container>
      <img src={logoImg} />
      {children}
    </Container>
  )
}

export default Header;
