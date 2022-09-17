import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams, } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCryptoDetail } from "../../store/reducers/actionCreator";

type queryParams = {
  id: string;
};

const CryptoDetails: React.FC = () => {
  const { cryptoDetail } = useAppSelector(state => state.cryptoReducer);
  const dispatch = useAppDispatch();
  const { id: idParam } = useParams<keyof queryParams>() as queryParams;

  useEffect(() => {
    dispatch(fetchCryptoDetail(idParam))
  }, [dispatch, idParam])


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
    </>
  )
}

export default CryptoDetails;
