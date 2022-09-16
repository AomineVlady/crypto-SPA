import React from 'react';
import CryptoTable from '../CryptoTable';
import Header from '../Header';
import { AppContainer, Main } from './style';

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        {/* Routing */}
        <CryptoTable></CryptoTable>
        {/* Routing */}
      </Main>
    </AppContainer>
  );
}

export default App;
