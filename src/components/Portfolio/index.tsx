import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import PortfolioItem from './PortfolioItem';
import { PortfolioContainer } from './style';

const Portfolio: React.FC = () => {
  const { list } = useAppSelector(state => state.cryptoReducer.portfolio);

  const renderPortfolioList = () => list.map(item => <PortfolioItem key={item.crypto.id} info={item} />)

  return (
    <PortfolioContainer>
      {list.length ? renderPortfolioList() : <p>Ваш портфель пока что пуст...</p>}
    </PortfolioContainer>
  )
}

export default Portfolio;
