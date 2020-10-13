import React, { useState, useEffect } from 'react';
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
  const [error, setError] = useState('');

  const [getDisDistributors, { loading, data }] = useLazyQuery(DISTRIBUTORS)

  useEffect(() => {
    getDisDistributors({
      variables: {
        "algorithm": "NEAREST",
        "lat": String(coordinates.lat),
        "long": String(coordinates.lng),
        "now": new Date()
      }
    })

    setError('')

  }, [coordinates.lat, coordinates.lng])

  const handleSubmit = () => {

    if (loading) return null;

    if (data && data.pocSearch && data.pocSearch.length > 0) {
      history.push(`/products?distributor=${data.pocSearch[0].id}`)
    } else {
      setError('Infelizmente, não encontramos produtos disponíveis para o endereço digitado.')
    }
  }

  return (
    <Container>
      <Header />
      <InputContainer>

        <h1><strong>Bebidas geladas</strong> a <strong>preço</strong> de mercado na sua casa <strong>agora</strong></h1>
        {error && <p className='error-text'>{error}</p>}
        <AddressInput />
        {
          coordinates.lat && coordinates.lng &&
          <SendButton onClick={handleSubmit}>
            {
              loading ? 'Carregando...' : 'BUSCAR PRODUTOS'
            }
          </SendButton>
        }
      </InputContainer>
    </Container>
  )
}

export default Home
