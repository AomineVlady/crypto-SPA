import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/redux';
import { ICrypto } from '../../models/ICrypto';
import { CryptoTableRow, TableAddButton } from './style'
import { CryptoSlice } from "../../store/reducers/crypto";
import PlusIcon from '../Icons/PlusIcon';
import { round } from '../../utils/calcs';


interface CryptoItemProps {
  crypto: ICrypto,
  onCryptoAdd: (crypto: ICrypto) => void
}

const CryptoListItem: React.FC<CryptoItemProps> = ({ crypto, onCryptoAdd }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onRowClickHandler = () => {
    dispatch(CryptoSlice.actions.clearCryptoDetailInfo());
    navigate('/' + crypto.id);
  }

  const onAddToPortfolioHandler = (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.stopPropagation();
    onCryptoAdd(crypto);
  }

  return (
    <CryptoTableRow onClick={() => onRowClickHandler()}>
      <td>{crypto.rank}</td>
      <td>{crypto.name}</td>
      <td>{round(parseFloat(crypto.priceUsd), 5)}$</td>
      <td><TableAddButton onClick={onAddToPortfolioHandler} title="Добавить в портфель"><PlusIcon /></TableAddButton></td>
    </CryptoTableRow>
  )
}

export default CryptoListItem;
