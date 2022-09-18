import styled from "styled-components";

export const CryptoDetailWrap = styled.div`
  
`
export const CryptoDetailAddToPortfolioButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 7px 7px 5px 7px;
  border: none;
  background-color: transparent;
  border: 25px;
  transition: all .3s ease;

  cursor: pointer;
  
  &:hover{
    background-color: #C3F8FF;
  }

  &:active{
    transform: scale(1.1)
  }
`
