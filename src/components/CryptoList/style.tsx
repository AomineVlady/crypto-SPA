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

export const CryptoTableBody = styled.tbody`
  background-color: #FFF6BF;

  tr{
    cursor: pointer;
    transition: all .3s ease;
    &:hover{
      background-color: #fff08f;
    }
  }
  td{
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
    text-align: center;
  }

  td,th{
    padding: 10px 30px;
  }
`;

export const TableAddButton = styled.button`
  padding: 5px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 15px;
  background-color: #FFF6BF;
  transition: background-color .3s ease;
  
  cursor: pointer;
  
  &:hover{
    background-color: #ffdd76;
  }
`
