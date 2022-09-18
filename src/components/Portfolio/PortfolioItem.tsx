import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { ICryptoPortfolioItem } from '../../models/ICryptoPortfolio';
import { CryptoSlice } from '../../store/reducers/crypto';
import CrossIcon from '../Icons/CrossIcon';
import { PortfolioItemButton, PortfolioItemWrapp } from './style';

interface PortfolioItemProps {
  info: ICryptoPortfolioItem,
}


const PortfolioItem: React.FC<PortfolioItemProps> = ({ info }) => {
  const { crypto, count } = info;
  const dispatch = useAppDispatch();

  const onPortfolioItemRemove = () => {
    dispatch(CryptoSlice.actions.removeFromPortfolio(crypto.id));
  }

  const cryptoStock: number = count * parseFloat(crypto.priceUsd);

  return (
    <PortfolioItemWrapp>
      <div>
        <p>{crypto.name}</p>
        <span>{cryptoStock}$</span>
      </div>
      <PortfolioItemButton onClick={onPortfolioItemRemove}><CrossIcon /></PortfolioItemButton>
    </PortfolioItemWrapp>
  )
}

export default PortfolioItem;
