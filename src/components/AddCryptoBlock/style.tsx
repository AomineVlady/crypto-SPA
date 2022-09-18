import styled from "styled-components";

export const CryptoInfoBlockWrap = styled.div`
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
`

export const CryptoInfoBlockButton = styled.button`
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

`

