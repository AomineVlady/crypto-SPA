import React from "react";
import { useAppSelector } from "../../hooks/redux";
import PortfolioIcon from "../Icons/PortfolioIcon";
import { HeaderColumn, HeaderIconButton, HeaderWrap, TopRate } from "./style";

const round = (value: number, charsAfter: number): number => Math.round(value * Math.pow(10, charsAfter)) / Math.pow(10, charsAfter);
const charsAfterСomma = 3

const Header: React.FC = () => {
  const { cryptoTopRate } = useAppSelector(state => state.cryptoReducer);

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
        <p>134,32 USD +2,38 (1,80 %)</p>
        <HeaderIconButton title="Портфель">
          <PortfolioIcon />
        </HeaderIconButton>
      </HeaderColumn>
    </HeaderWrap>
  )
}

export default Header;
