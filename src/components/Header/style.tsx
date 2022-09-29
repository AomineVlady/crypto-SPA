import styled from "styled-components";
import { size } from "../../styles/global";

export const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  @media (max-width: ${size.laptop}) {
    padding: 10px 20px;
  }

  @media (max-width: ${size.tablet}) {
    padding: 5px 10px;
  }
`;

export const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  .portfolio-bank{
    font-size: 1rem;
  }

  @media (max-width: ${size.laptop}) {
    .portfolio-bank{
      font-size: 0.9rem;
    }
  }

  @media (max-width: ${size.tablet}) {
    .portfolio-bank{
      font-size: 0.8rem;
    }
  }
`;


export const HeaderIconButton = styled.button`
  background-color: transparent;
  padding: 5px 5px 4px 5px;
  margin: 0 10px;
  transition: background-color .3s ease;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  svg{
    width: 2.2rem;
    height: 2.2rem;
    fill: #ABD9FF;
    stroke-width: 1px;
    transition: fill .3s ease;
  }

  &:hover{
    background-color: #ABD9FF;
  }

  &:hover svg{
    fill: #fff;
  }

  @media (max-width: ${size.laptop}) {
    margin: 0 5px;

    svg{
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: ${size.tablet}) {
    margin: 0 2px;

    svg{
      width: 21px;
      height: 21px;
    }
  }

`;

export const TopRate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  background-color: #FFF6BF;
  border-radius: 10px;
  margin: 0 10px;
  
  span {
    text-align: left;
    font-size: 0.8rem;
    color: #818181;
    margin-bottom:5px;
  }
  
  b{
    text-align: center;
    font-size: 1rem;
    color: #000000;
  }

  @media (max-width: ${size.laptop}) {
    padding: 5px 10px;
    margin: 0 5px;
    span {
      font-size: .7rem;
      color: #646464;
      margin-bottom: 4px;
    }

    b{
      font-size: .8rem;
    }
  }

  @media (max-width: ${size.tablet}) {
    padding: 5px 10px;
    margin: 0 2px;
    
    span {
      font-size: .7rem;
      color: #646464;
      margin-bottom: 3px;
    }

    b{
      font-size: .8rem;
    }
  }

  @media (max-width: ${size.mobileM}){
    display: none;
  }
`
