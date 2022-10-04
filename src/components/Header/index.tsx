import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { round } from "../../utils/calcs";
import { getBankDiffText } from "../../utils/portfolioInfo";
import PortfolioIcon from "../Icons/PortfolioIcon";
import { HeaderColumn, HeaderIconButton, HeaderWrap, TopRate } from "./style";

const charsAfterСomma = 3;

interface HeaderProps {
  onPortfolioOpen: () => void,
}

const Header: React.FC<HeaderProps> = ({ onPortfolioOpen }) => {
  const { cryptoTopRate, portfolio } = useAppSelector(state => state.cryptoReducer);

  const renderTopRate = () => cryptoTopRate.list.map(item =>
    <TopRate key={item.name}>
      <span>{item.name}</span>
      <b>{round(parseFloat(item.priceUsd), charsAfterСomma)}$</b>
    </TopRate>
  );

  const renderPortfolioBankInfo = () => {
    const { value, diff } = portfolio.bank;
    const priceDiffText: string = `${getBankDiffText(diff.price)}$`;
    const percentDiffText: string = `(${getBankDiffText(diff.percentage)}%)`;
    const isPositive = diff.price >= 0 && diff.percentage >= 0;

    return <p className="portfolio-bank">{round(value, 3)} USD
      <span className={`bank__info ${isPositive ? 'info-positive' : 'info-negative'}`}> {priceDiffText} {percentDiffText} </span>
    </p>
  }

  const { isLoading } = cryptoTopRate;

  return (
    <HeaderWrap>
      <HeaderColumn>
        {isLoading ?
          <p>Загрузка...</p>
          : renderTopRate()}
      </HeaderColumn>
      <HeaderColumn>
        {renderPortfolioBankInfo()}
        <HeaderIconButton title="Портфель" onClick={onPortfolioOpen}>
          <PortfolioIcon />
        </HeaderIconButton>
      </HeaderColumn>
    </HeaderWrap>
  )
}

export default Header;
