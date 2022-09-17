import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { ICrypto } from '../../models/ICrypto';
import { CryptoTableRow, TableAddButton } from './style'
import { CryptoSlice } from "../../store/reducers/crypto";
import PlusIcon from '../Icons/PlusIcon';


interface CryptoItemProps {
  crypto: ICrypto,
  isPortfolioItem: boolean
}

const CryptoListItem: React.FC<CryptoItemProps> = ({ crypto, isPortfolioItem }) => {
  const [isAdd, setAdd] = useState<boolean>(isPortfolioItem);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onRowClickHandler = () => {
    navigate('/' + crypto.id);
    dispatch(CryptoSlice.actions.clearCryptoDetailInfo());
  }

  const onAddToPortfolioHandler = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.stopPropagation();

    setAdd(!isAdd);
  }

  return (
    <CryptoTableRow onClick={() => onRowClickHandler()}>
      <td>{crypto.rank}</td>
      <td>{crypto.name}</td>
      <td>{crypto.priceUsd}$</td>
      <td><TableAddButton onClick={onAddToPortfolioHandler}><PlusIcon /></TableAddButton></td>
    </CryptoTableRow>
  )
}

export default CryptoListItem;
