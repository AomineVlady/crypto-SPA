import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { fetchCryptoList } from '../../store/reducers/actionCreator';
import CryptoDetails from '../CryptoDetails';
import CryptoList from '../CryptoList';
import Header from '../Header';
import { AppContainer, Main } from './style';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCryptoList())
  }, [dispatch])

  return (
    <AppContainer>
      <Header />
      <Main>
        <Routes>
          <Route index element={<CryptoList />} />
          <Route path='/:id' element={<CryptoDetails />} />
        </Routes>
      </Main>
    </AppContainer>
  );
}

export default App;
