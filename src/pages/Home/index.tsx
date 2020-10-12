import React from 'react';
import { useLazyQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom';

import { useCoordinates } from '../../hooks/coordinates';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import AddressInput from '../../components/AddressInput';

import DISTRIBUTORS from '../../queries/distributorsQuery';

import { Container, InputContainer, SendButton } from './styles';

const Home: React.FC = () => {

  const history = useHistory();
  const { coordinates } = useCoordinates();

  const [getDisDistributors, { loading, data }] = useLazyQuery(DISTRIBUTORS)

  const handleSubmit = () => {
    getDisDistributors({
      variables: {
        "algorithm": "NEAREST",
        "lat": String(coordinates.lat),
        "long": String(coordinates.lng),
        "now": new Date()
      }
    })
    if (data && data.pocSearch[0].id) {
      history.push(`/products?distributor=${data.pocSearch[0].id}`)
    }
  }

  return (
    <Container>
      <Header />
      <InputContainer>
        <AddressInput />
        <SendButton onClick={handleSubmit}>
          BUSCAR PRODUTOS
        </SendButton>
      </InputContainer>
    </Container>
  )
}

export default Home
