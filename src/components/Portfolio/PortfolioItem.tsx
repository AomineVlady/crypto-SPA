import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { ICryptoPortfolioItem } from '../../models/ICryptoPortfolio';
import { CryptoSlice } from '../../store/reducers/crypto';
import { round } from '../../utils/round';
import MinusIcon from '../Icons/MinusIcon';
import { PortfolioItemButton, PortfolioItemInfo, PortfolioItemWrapp } from './style';

interface PortfolioItemProps {
  info: ICryptoPortfolioItem,
}


const PortfolioItem: React.FC<PortfolioItemProps> = ({ info }) => {
  const { crypto, count } = info;
  const dispatch = useAppDispatch();

  const onPortfolioItemRemove = (): void => {
    dispatch(CryptoSlice.actions.removeFromPortfolio(crypto.id));
  }

  const cryptoStock: number = count * parseFloat(crypto.priceUsd);

  return (
    <PortfolioItemWrapp>
      <PortfolioItemInfo>
        <p className='portfolio-crypto-name'>{crypto.name}</p>
        <span className='portfolio-crypto-price'>{round(cryptoStock, 4)}$</span>
      </PortfolioItemInfo>
      <PortfolioItemButton onClick={onPortfolioItemRemove} title="Убрать из портфеля"><MinusIcon /></PortfolioItemButton>
    </PortfolioItemWrapp>
  )
}

export default PortfolioItem;
