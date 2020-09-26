import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

import Home from './components/Home';

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
