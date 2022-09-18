import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchCryptoDetail } from "../../store/reducers/actionCreator";
import AddCryptoBlock from "../AddCryptoBlock";
import Dialog from "../Dialog";
import PlusIcon from "../Icons/PlusIcon";
import { CryptoDetailAddToPortfolioButton, CryptoDetailsHeader, CryptoDetailsInfo, CryptoDetailsWrapper, DetailsCpntainer } from "./style";

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
    <DetailsCpntainer>
      {name ?
        <CryptoDetailsWrapper>
          <CryptoDetailsHeader>
            <b className="crypto-details-name">{name}</b>
            <CryptoDetailAddToPortfolioButton onClick={dialogCryptoAddToggle}>
              <span>Добавить</span> <PlusIcon />
            </CryptoDetailAddToPortfolioButton>
          </CryptoDetailsHeader>
          <CryptoDetailsInfo>
            <div className="details-info-item">
              <span className="details-info-desc">
                Ранг рыночной капитализации
              </span>
              <span className="details-info-text">
                {rank}
              </span>
            </div>

            <div className="details-info-item">
              <span className="details-info-desc">
                Символ идентификации актива на бирже
              </span>
              <span className="details-info-text">
                {symbol}
              </span>
            </div>
            <div className="details-info-item">
              <span className="details-info-desc">
                Доступное предложение для торговли
              </span>
              <span className="details-info-text">
                {supply}
              </span>
            </div>
            <div className="details-info-item">
              <span className="details-info-desc">
                Общее количество выпущенных активов
              </span>
              <span className="details-info-text">
                {maxSupply}
              </span>
            </div>
            <div className="details-info-item">
              <span className="details-info-desc">
                Предложение х цена
              </span>
              <span className="details-info-text">
                {marketCapUsd}
              </span>
            </div>
            <div className="details-info-item">
              <span className="details-info-desc">
                Объем торгов, представленный в долларах США за последние 24 часа
              </span>
              <span className="details-info-text">
                {volumeUsd24Hr}
              </span>
            </div>
            <div className="details-info-item">
              <span className="details-info-desc">
                Цена, взвешенная по объему, на основе рыночных данных в режиме реального времени
              </span>
              <span className="details-info-text">
                {priceUsd}
              </span>
            </div>
            <div className="details-info-item">
              <span className="details-info-desc">
                Изменение направления и стоимости за последние 24 часа
              </span>
              <span className="details-info-text">
                {changePercent24Hr}
              </span>
            </div>
            <div className="details-info-item">
              <span className="details-info-desc">
                Средневзвешенная цена по объему за последние 24 часа
              </span>
              <span className="details-info-text">
                {vwap24Hr}
              </span>
            </div>

          </CryptoDetailsInfo>
        </CryptoDetailsWrapper> :
        <p>Загрузка. . .</p>}
      <Link to='/' className="back-to-main-anchor">Вернуться на главную</Link>
      <Dialog dialogName={`Добавление ${name}`} isOpen={isDialogOpen} onClose={dialogCryptoAddToggle}>
        <AddCryptoBlock cryptoInfo={cryptoDetail.crypto} onClose={dialogCryptoAddToggle} />
      </Dialog>
    </DetailsCpntainer>
  )
}

export default CryptoDetails;
