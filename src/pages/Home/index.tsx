import React, { useState } from 'react';
import PlacesAutoComplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

interface CordinatesData {
  lat: number | null;
  lng: number | null;
}

const Home: React.FC = () => {
  const [address, setAddress] = useState('')
  const [coordinates, setCordinates] = useState<CordinatesData>({ lat: null, lng: null })

  const handleSelect = async (value: string) => {
    const results = await geocodeByAddress(value);

    const latLng = await getLatLng(results[0])

    setAddress(value);
    setCordinates(latLng)
  }

  return (
    <PlacesAutoComplete value={address} onChange={setAddress} onSelect={handleSelect}>
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>

          <input {...getInputProps({ placeholder: "Digite seu endereço" })} />
          <div>
            {loading && <p>Carregando...</p>}
            {suggestions.map((suggestion) => {

              const style = {
                backgroundColor: suggestion.active ? '#41b6e6' : '#fff'
              }


              return <div {...getSuggestionItemProps(suggestion, {
                style
              })} > {suggestion.description}</div>
            })}
          </div>
        </div>
      )
      }
    </PlacesAutoComplete >
  )
}

export default Home
