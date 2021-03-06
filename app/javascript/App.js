import React from 'react';
import Hello from './components/Hello';

import ThemeProvider from './layouts/ThemeProvider';

const App = () => (
  <ThemeProvider>
    <Hello />
  </ThemeProvider>
);

export default App;
