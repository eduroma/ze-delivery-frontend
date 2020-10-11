import React from 'react';

import { CoordinatesProvider } from './coordinates';

const AppProvider: React.FC = ({ children }) => (
  <CoordinatesProvider>
    {children}
  </CoordinatesProvider>
);
export default AppProvider;
