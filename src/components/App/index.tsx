import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { fetchCryptoList } from '../../store/reducers/actionCreator';
import CryptoDetails from '../CryptoDetails';
import CryptoList from '../CryptoList';
import Dialog from '../Dialog';
import Header from '../Header';
import Portfolio from '../Portfolio';
import { AppContainer, Main } from './style';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isPortfolioDialog, setPortfolioDialog] = useState<boolean>(false);

  const portfolioDialogToggle = () => {
    setPortfolioDialog(!isPortfolioDialog);
  }

  useEffect(() => {
    dispatch(fetchCryptoList())
  }, [dispatch])

  return (
    <AppContainer>
      <Header onPortfolioOpen={portfolioDialogToggle} />
      <Main>
        <Routes>
          <Route index element={<CryptoList />} />
          <Route path='/:id' element={<CryptoDetails />} />
        </Routes>
      </Main>
      <Dialog dialogName='Портфель' isOpen={isPortfolioDialog} onClose={portfolioDialogToggle}>
        <Portfolio />
      </Dialog>
    </AppContainer>
  );
}

export default App;
