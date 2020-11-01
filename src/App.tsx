import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './Theme';

import { Intro } from './pages/Intro';
import { About } from './pages/About';
import { Navbar } from './components/Navbar';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <Intro />
    <About />
  </ThemeProvider>
);

export default App;
