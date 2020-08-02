import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Routes />
    </Router>
  </ThemeProvider>
);

export default App;
