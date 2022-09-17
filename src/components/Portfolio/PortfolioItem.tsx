import React from 'react';
import { ICryptoPortfolioItem } from '../../models/ICryptoPortfolio';
import CrossIcon from '../Icons/CrossIcon';
import { PortfolioItemButton, PortfolioItemWrapp } from './style';

interface PortfolioItemProps {
  info: ICryptoPortfolioItem,
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ info }) => {
  const { crypto, count } = info;

  return (
    <PortfolioItemWrapp>
      <div>
        <p>{crypto.name}</p>
        <span>{count}</span>
      </div>
      <PortfolioItemButton onClick={() => { }}><CrossIcon /></PortfolioItemButton>
    </PortfolioItemWrapp>
  )
}

export default PortfolioItem;
