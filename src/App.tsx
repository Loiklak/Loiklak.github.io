import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

import { About } from './pages/About';
import { Navbar } from './components/Navbar';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <About />
  </ThemeProvider>
);

export default App;
