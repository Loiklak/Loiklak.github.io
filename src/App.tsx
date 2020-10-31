import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

import { About } from './pages/About';

const App = () => (
  <ThemeProvider theme={theme}>
    <About />
  </ThemeProvider>
);

export default App;
