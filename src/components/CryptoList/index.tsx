import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ICrypto } from "../../models/ICrypto";
import { CryptoSlice } from "../../store/reducers/crypto";
import AddCryptoBlock from "../AddCryptoBlock";
import Dialog from "../Dialog";
import Pagination from "../Pagination";
import CryptoListItem from "./CryptoListItem";
import { CryptoTable, CryptoTableBody, CryptoTableHead, CryptoTableWrap, CryptoTableRow } from "./style";

type IDialogOptions = {
  isOpen: boolean,
  crypto: ICrypto,
}

const initialDialogOptions = {
  isOpen: false,
  crypto: {
    id: '',
    rank: '',
    symbol: '',
    name: 'криптовалюты',
    supply: '',
    maxSupply: '',
    marketCapUsd: '',
    volumeUsd24Hr: '',
    priceUsd: '',
    changePercent24Hr: '',
    vwap24Hr: ''
  },
}

const CryptoList: React.FC = () => {
  const { cryptoList, isLoading, pagesCount } = useAppSelector(state => state.cryptoReducer);
  const [dialogOptions, setDialogOptions] = useState<IDialogOptions>(initialDialogOptions);
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(CryptoSlice.actions.pageToggle(page));

    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, [dispatch, page])

  const handlePaginationFlip = (value: number) => {
    setPage(value);
  }

  const dialogCryptoAddToggle = () => {
    setDialogOptions({
      ...dialogOptions,
      isOpen: !dialogOptions.isOpen,
      crypto: { ...initialDialogOptions.crypto },
    });
  }

  const dialogCryptoAdd = (cryptoInfo: ICrypto) => {
    setDialogOptions({
      ...dialogOptions,
      isOpen: !dialogOptions.isOpen,
      crypto: cryptoInfo
    });
  }

  const renderCryptoTableBody = (list: ICrypto[]) => (
    list.map(item =>
      <CryptoListItem
        key={item.id}
        crypto={item}
        onCryptoAdd={dialogCryptoAdd}
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
      <Pagination pageCount={pagesCount} perPage={page} pageFlip={handlePaginationFlip} />
      <Dialog dialogName={`Добавление ${dialogOptions.crypto.name}`} isOpen={dialogOptions.isOpen} onClose={dialogCryptoAddToggle}>
        <AddCryptoBlock cryptoInfo={dialogOptions.crypto} onClose={dialogCryptoAddToggle} />
      </Dialog>
    </CryptoTableWrap >
  )
}

export default CryptoList;
