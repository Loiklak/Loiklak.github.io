import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';

import { Intro } from './pages/Intro';
import { Navbar } from './components/Navbar';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <Navbar />
    <Intro />
  </ThemeProvider>
);

export default App;
