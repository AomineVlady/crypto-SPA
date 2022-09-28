import styled from "styled-components";

export const DetailsCpntainer = styled.div`
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
  
`
export const CryptoDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px 0;
  margin-bottom: 30px;

  .crypto-details-name{
    font-size: 2rem;
    margin-right: 50px;
  }
  `

export const CryptoDetailsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
    padding: 5px 0;
    margin-bottom: 5px;

    .details-info-desc{
      font-size: 1rem;
      color: #757575;
    }

    .details-info-text{
      font-size: 1rem;
      color: #000;
    }
  }
  padding: 20px 0;
`
export const ChartWrapper = styled.div`
  margin: 0 auto;
  scale: 1;
`
