import styled from "styled-components";

export const CryptoInfoBlockWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CryptoInfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    font-size: 1rem;
    color: #000;
  }

  input{
    padding: 10px 5px;
    color: #000;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #3d3d3d;
    transition: border .3s ease;

    &:focus{
      border: 2px solid #000;
    }
  }
`

export const CryptoInfoBlockButton = styled.div`
  background-color: #C3F8FF;
  border-radius: 10px;
  padding: 20px 10px;
  color: #3d3d3d;
  transition: all .3s ease;
  scale: 0;

  cursor: pointer;

  &:hover{
    color: #000;
    background-color: #ABD9FF;    
  }

  &:active{
    color: #3d3d3d;
    background-color: #C3F8FF;  
    scale: .2;  
  }

`

