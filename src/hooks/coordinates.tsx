import React, { createContext, useContext, useCallback, useState } from 'react';

interface Coordinates {
  lat: number | null;
  lng: number | null;
}

interface CoordinatesData {
  addCoordinates(data: Coordinates): void;
  coordinates: Coordinates;
}

const CoordinatesContext = createContext<CoordinatesData>({} as CoordinatesData);

export const CoordinatesProvider: React.FC = ({ children }) => {
  const [coordinates, setCordinates] = useState<Coordinates>({ lat: null, lng: null })

  const addCoordinates = useCallback(
    (data: Coordinates) => {
      setCordinates(data);
    },
    [],
  );

  return (
    <CoordinatesContext.Provider value={{ addCoordinates, coordinates }} >
      {children}
    </CoordinatesContext.Provider>
  )
};

export const useCoordinates = (): CoordinatesData => {
  const context = useContext(CoordinatesContext);

  if (!context) {
    throw new Error('useCoordinates must be called within a CoordinateContext provider!');
  }

  return context;
};


