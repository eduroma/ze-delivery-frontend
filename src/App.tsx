import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client'

import api from './services/api';

import Routes from './routes'

const App: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={api}>
        <Routes />
      </ApolloProvider>
    </Router>
  )
}

export default App;
