import React from "react";
import PortfolioIcon from "../Icons/PortfolioIcon";
import { HeaderColumn, HeaderIconButton, HeaderWrap } from "./style";

const Header: React.FC = () => {
  return (
    <HeaderWrap>
      <HeaderColumn>
        <p> bitc 25k$ </p>
        <p> bitc 25k$ </p>
        <p> bitc 25k$ </p>
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
