import React from 'react';

import logoImg from '../../assets/ze-white-logo.png';

import { Container } from './styles';

const Header: React.FC = () => {

  return (
    <Container>
      <img src={logoImg} />
    </Container>
  )
}

export default Header;
