import styled from "styled-components";

export const CryptoTableWrap = styled.div`
  width: 100%;
  padding: 30px 50px;
`;

export const CryptoTable = styled.table`
  width: 100%;
  border-radius: 15px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const CryptoTableHead = styled.thead`
  text-align: center;
  background-color: #ffdd76;

  th{
    border-radius: 15px;
  }
`;

export const CryptoTableRow = styled.tr`

  th:nth-child(1), td:nth-child(1){
    width: 20%;
    text-align: center;  
  }  
  
  th:nth-child(2), td:nth-child(2){
    width: 50%;
  }

  th:nth-child(3), td:nth-child(3){
    width: 30%;
  }

  td:not(:last-child),th{
    padding: 10px 30px;
  }
`;


export const CryptoTableBody = styled.tbody`
  tr{
    cursor: pointer;
    transition: all .3s ease;
    
    &:hover{
      border: 2px solid #000;
       & td:not(:last-child){
        background-color: #ffeb91;
      }
    }
  }
  td{
    background-color: #FFF6BF;
    border-radius: 15px;
    transition: all .3s ease;

    &:last-child{
      background-color: #FFF;
    }
  }
`;

export const TableAddButton = styled.button`
  font-size: 1.2rem;
  border: none;
  border-radius: 15px;
  background-color: #C3F8FF;
  transition: all .3s ease;
  padding: 5px 20px;
  cursor: pointer;
  
  &:hover{
    background-color: #ffdd76;
  }

  &:active{
    transform: scale(.9);
  }
`
