import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux';
import { fetchCryptoTopRateList, fetchPortfolioList } from '../store/reducers/actionCreator';
import CryptoDetails from './CryptoDetails';
import CryptoList from './CryptoList';
import Dialog from '../components/Dialog';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import { AppContainer, Main } from './style';

const TOP_RATE_LIMIT = 3;

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isPortfolioDialog, setPortfolioDialog] = useState<boolean>(false);

  const portfolioDialogToggle = () => {
    setPortfolioDialog(!isPortfolioDialog);
  }

  useEffect(() => {
    dispatch(fetchCryptoTopRateList(TOP_RATE_LIMIT));
    dispatch(fetchPortfolioList());
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
