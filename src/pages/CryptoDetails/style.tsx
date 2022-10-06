import styled from "styled-components";
import { size } from "../../styles/global";

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 20px;
  
  .back-to-main-anchor{
    margin-top: 50px;
    text-decoration: none;
    background-color: #ffeea3;
    border-radius: 20px;
    transition: all .3s ease;
    padding: 10px 30px;

    &:hover{
      background-color: #ffe880;
    }    
    
    &:active{
      transform: scale(.9);
    }
  }

  @media (max-width: ${size.laptop}) {
    .back-to-main-anchor{
    }
  }
`

export const CryptoDetailAddToPortfolioButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  padding: 10px 20px;
  border: none;
  background-color: #C3F8FF;
  border: 25px;
  transition: all .3s ease;

  cursor: pointer;
  
  &:hover{
    background-color: #ffdd76;
  }

  &:active{
    transform: scale(1.1)
  }

  span{
    margin-right: 10px;
  }

  @media (max-width: ${size.laptop}) {
    padding: 8px 16px;

    span{
      margin-right: 8px;
      font-size: .9rem;
    }
  }

  @media (max-width: ${size.tablet}) {
    padding: 6px 12px;
    font-size: .7rem;

    svg{
      width: 20px;
      height: 20px;
    }

    span{
      margin-right: 6px;
      font-size: .8rem;
    }
  }
  
`
export const CryptoDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 20px;
  margin-bottom: 30px;

  .crypto-details-name{
    font-size: 2rem;
    margin-right: 50px;
  }

  @media (max-width: ${size.laptop}) {
    margin-bottom: 20px;

    .crypto-details-name{
      font-size: 1.8rem;
      margin-right: 40px;
    }
  }

  @media (max-width: ${size.tablet}) {
    .crypto-details-name{
      font-size: 1.5rem;
      margin-right: 20px;
    }
  }
`

export const CryptoDetailsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
  height: 100%;
`
export const CryptoDetailsInfo = styled.div`
    width: 90%;
    margin: 0 auto;

  .details-info-item{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding: 5px 10px;
    border: 2px solid #c4c4c4;
    border-radius: 10px;
    margin-bottom: 5px;

    .details-info-desc{
      font-size: 1rem;
      white-space: pre-wrap;
      max-width: 500px;
      color: #757575;
    }

    .details-info-text{
      font-size: 1rem;
      color: #000;
    }
  }

  @media (max-width: ${size.laptop}) {
    .details-info-item{
      padding: 5px 10px;

      .details-info-desc{
        font-size: 1rem;
        max-width: 400px;
      }

      .details-info-text{
        font-size: 1rem;
      }
    }
  }
  @media (max-width: ${size.tablet}) {
    .details-info-item{
      flex-direction: column;
      margin-bottom: 10px;

      .details-info-desc{
        font-size: .9rem;
        max-width: 100%;
      }

      .details-info-text{
        font-size: .9rem;
        margin-top: 10px;
      }
    }
  }

`
export const ChartWrapper = styled.div`
  scale: 1;

  @media (max-width: ${size.laptop}) {
    scale: .8;
  }

  @media (max-width: ${size.tablet}) {
    scale: .6;
  }

  @media (max-width: ${size.mobileM}) {
    scale: .3;
  }
`
