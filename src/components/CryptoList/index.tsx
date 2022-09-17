import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { ICrypto } from "../../models/ICrypto";
import { checkPortfolioItem } from "../../utils/checkPortfoli";
import CryptoListItem from "./CryptoListItem";
import { CryptoTable, CryptoTableBody, CryptoTableHead, CryptoTableWrap, CryptoTableRow } from "./style";



const CryptoList: React.FC = () => {
  const { cryptoList, isLoading, portfolio } = useAppSelector(state => state.cryptoReducer);

  const renderCryptoTableBody = (list: ICrypto[]) => (
    list.map(item =>
      <CryptoListItem
        key={item.id}
        crypto={item}
        isPortfolioItem={checkPortfolioItem(portfolio.list, item.id)}
      />
    )
  )

  return (
    <CryptoTableWrap>
      {isLoading ?
        <p>Загрузка. . .</p> :
        <CryptoTable>
          <CryptoTableHead>
            <CryptoTableRow>
              <th>#</th>
              <th>Наименование</th>
              <th>Стоимость USD</th>
            </CryptoTableRow>
          </CryptoTableHead>
          <CryptoTableBody>
            {renderCryptoTableBody(cryptoList)}
          </CryptoTableBody>
        </CryptoTable>
      }
    </CryptoTableWrap >
  )
}

export default CryptoList;
