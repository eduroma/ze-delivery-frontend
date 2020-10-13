import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client'
import { useHistory } from 'react-router-dom';

import { useCoordinates } from '../../hooks/coordinates';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import AddressInput from '../../components/AddressInput';

import DISTRIBUTORS from '../../queries/distributorsQuery';

import { Container, InputContainer, SendButton, InfoContainer, InfoColumn } from './styles';

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

      <InfoContainer>
        <h1>Como funciona o Zé Delivery?</h1>
        <div>
          <InfoColumn>
            <img src="https://courier-images-web.imgix.net/static/img/delivery-man.png?auto=compress,format&amp;fit=max&amp;w=112&amp;h=undefined&amp;dpr=2&amp;fm=png" />
            <h3>Onde você estiver</h3>
            <p>Achamos as bebidas geladinhas na sua área e levamos até você!</p>
          </InfoColumn>
          <InfoColumn>
            <img src="https://courier-images-web.imgix.net/static/img/welcome_how_it_works_02.png?auto=compress,format&fit=max&w=112&h=undefined&dpr=2&fm=png" />
            <h3>Só as favoritas</h3>
            <p>Você pode escolher entre cervejas, vinhos, água, energéticos, refrigerantes, salgadinhos e até gelo!</p>
          </InfoColumn>
          <InfoColumn>
            <img src="https://courier-images-web.imgix.net/static/img/double_cellphone_greeting.png?auto=compress,format&fit=max&w=112&h=undefined&dpr=2&fm=png" />
            <h3>Facilita seu brinde</h3>
            <p>Suas bebidas chegam geladinhas e super rápidas, prontas para brindar!</p>
          </InfoColumn>
        </div>

      </InfoContainer>


    </Container>
  )
}

export default Home
