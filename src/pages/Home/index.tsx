import React from 'react';

import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import AddressInput from '../../components/AddressInput';

import { Container, InputContainer } from './styles';

const Home: React.FC = () => {

  const history = useHistory();

  const handleSubmit = () => {
    history.push('/products?lat=1111&lgt=2222&distributor=526')
  }

  return (
    <Container>
      <Header />
      <InputContainer>
        <AddressInput />
        <button onClick={handleSubmit}>
          Enviar
        </button>
      </InputContainer>
    </Container>
  )
}

export default Home
