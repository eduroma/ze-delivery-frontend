import React, { useState } from 'react';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { MdLocationOn } from 'react-icons/md';

import { useCoordinates } from '../../hooks/coordinates';

import { Container, StyledInput, StyledSuggestions } from './styles'

const AddressInput: React.FC = () => {
  const [address, setAddress] = useState('')
  const { addCoordinates } = useCoordinates()

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);

    const latLng = await getLatLng(results[0])

    setAddress(value);
    addCoordinates(latLng)
  }

  return (
    <PlacesAutoComplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
      searchOptions={{
        types: ['address'],
      }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <Container>
          <StyledInput>
            <MdLocationOn size={26} color='#333' />
            <input {...getInputProps({ placeholder: "Digite seu endereço" })} />
          </StyledInput>
          <StyledSuggestions>
            {loading && <p style={{ color: '#FFF' }}>Carregando...</p>}
            {suggestions.map((suggestion) => {

              const style = {
                backgroundColor: suggestion.active ? '#333' : '#FFF',
                color: suggestion.active ? '#FFF' : '#333'
              }
              return <div {...getSuggestionItemProps(suggestion, {
                style
              })}> {suggestion.description}</div>
            })}
          </StyledSuggestions>
        </Container>
      )
      }
    </PlacesAutoComplete >
  )

}

export default AddressInput;
