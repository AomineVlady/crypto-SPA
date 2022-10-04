import styled from "styled-components";
import { size } from "../../styles/global";

export const CryptoInfoBlockWrap = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const CryptoInfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    font-size: 1.4rem;
    color: #000;
    margin-right: 10px;
  }

  .add__input__field{
    margin-left: 20px;
    white-space: nowrap;
  }

  .add__crypto__input{
    padding: 10px 5px;
    margin: 0 10px;
    color: #000;
    background-color: #fff;
    border-radius: 5px;
    border: 2px solid #5c5c5c;
    transition: border .3s ease;
    width: 60px;

    &:focus{
      border: 2px solid #000;
    }
  }

  @media (max-width: ${size.tablet}) {
    p{
      font-size: 1.2rem;
    }

    .add__crypto__input{
      padding: 8px 5px;
      width: 60px;
    }
  }
  @media (max-width: ${size.tablet}) {
    p{
      font-size: 1rem;
    }
  }

`

export const CryptoInfoBlockButton = styled.input`
  background-color: #C3F8FF;
  border-radius: 10px;
  padding: 10px 20px;
  border: 2px solid #ABD9FF; ;
  color: #3d3d3d;
  margin: 20px 0;
  transition: all .3s ease;
  scale: 1;

  cursor: pointer;

  &:hover{
    color: #000;
    background-color: #ABD9FF;    
  }

  &:active{
    color: #3d3d3d;
    background-color: #C3F8FF;  
    scale: .9;  
  }

  @media (max-width: ${size.tablet}) {
    padding: 8px 15px;
    font-size: .9rem;
  }

  @media (max-width: ${size.tablet}) {
    padding: 6px 12px;
    font-size: .8rem;

  }

`

