import { AppLayout } from 'components/Layout/AppLayout';
import React from 'react';
import { GlobalStyles } from 'styles/GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <AppLayout />
    </div>
  );
}

export default App;
