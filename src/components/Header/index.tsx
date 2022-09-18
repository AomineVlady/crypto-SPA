import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { ICryptoPortfolioItem } from "../../models/ICryptoPortfolio";
import PortfolioIcon from "../Icons/PortfolioIcon";
import { HeaderColumn, HeaderIconButton, HeaderWrap, TopRate } from "./style";

const round = (value: number, charsAfter: number): number => Math.round(value * Math.pow(10, charsAfter)) / Math.pow(10, charsAfter);

const portfolioCashSum = (list: ICryptoPortfolioItem[]): number => {
  return list.reduce((firstValue, secondValue) =>
    firstValue + secondValue.count * parseFloat(secondValue.crypto.priceUsd),
    0);
}

const charsAfterСomma = 3;

interface HeaderProps {
  onPortfolioOpen: () => void,
}

const Header: React.FC<HeaderProps> = ({ onPortfolioOpen }) => {
  const { cryptoTopRate, portfolio } = useAppSelector(state => state.cryptoReducer);

  const renderTopRate = () => cryptoTopRate.map(item =>
    <TopRate key={item.name}>
      <span>{item.name}</span>
      <b>{round(parseFloat(item.priceUsd), charsAfterСomma)}$</b>
    </TopRate>
  )


  return (
    <HeaderWrap>
      <HeaderColumn>
        {renderTopRate()}
      </HeaderColumn>
      <HeaderColumn>
        <p>{round(portfolioCashSum(portfolio.list), 3)}$</p>
        <HeaderIconButton title="Портфель" onClick={onPortfolioOpen}>
          <PortfolioIcon />
        </HeaderIconButton>
      </HeaderColumn>
    </HeaderWrap>
  )
}

export default Header;
