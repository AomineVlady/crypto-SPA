import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCryptoDetail } from "../../store/reducers/actionCreator";
import AddCryptoBlock from "../AddCryptoBlock";
import Dialog from "../Dialog";
import PlusIcon from "../Icons/PlusIcon";
import { CryptoDetailAddToPortfolioButton } from "./style";

type queryParams = {
  id: string;
};

const CryptoDetails: React.FC = () => {
  const { cryptoDetail } = useAppSelector(state => state.cryptoReducer);
  const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { id: idParam } = useParams<keyof queryParams>() as queryParams;

  useEffect(() => {
    dispatch(fetchCryptoDetail(idParam))
  }, [dispatch, idParam])

  const dialogCryptoAddToggle = (): void => {
    setDialogOpen(!isDialogOpen);
  };

  const {
    id,
    rank,
    symbol,
    name,
    supply,
    maxSupply,
    marketCapUsd,
    volumeUsd24Hr,
    priceUsd,
    changePercent24Hr,
    vwap24Hr
  } = cryptoDetail.crypto;

  return (
    <>
      {name ?
        <div>
          <CryptoDetailAddToPortfolioButton onClick={dialogCryptoAddToggle}>
            Добавить <PlusIcon />
          </CryptoDetailAddToPortfolioButton>
          <p>{id}</p>
          <p>{rank}</p>
          <p>{symbol}</p>
          <p>{name}</p>
          <p>{supply}</p>
          <p>{maxSupply}</p>
          <p>{marketCapUsd}</p>
          <p>{volumeUsd24Hr}</p>
          <p>{priceUsd}</p>
          <p>{changePercent24Hr}</p>
          <p>{vwap24Hr}</p>
        </div> :
        <p>Загрузка. . .</p>}
      <Link to='/'>Вернуться на главную</Link>
      <Dialog dialogName={`Добавление ${name}`} isOpen={isDialogOpen} onClose={dialogCryptoAddToggle}>
        <AddCryptoBlock cryptoInfo={cryptoDetail.crypto} onClose={dialogCryptoAddToggle} />
      </Dialog>
    </>
  )
}

export default CryptoDetails;
