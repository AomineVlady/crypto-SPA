import styled from "styled-components";

export const PaginationWrapper = styled.div`
  margin: 15px auto;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .pag-button--active{
    background-color:#31c1ff;
    box-shadow: 0px 0px 10px #0000003b;
  }
`
export const PaginationButton = styled.button`
  background-color: #C3F8FF;
  border: none;
  padding: 8px 10px;
  border-radius: 5px;
  margin: 0 10px;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0px 0px 5px #0000003b;
  transition: all .3s ease;

  &:hover{
    background-color:#76efffFF;
    box-shadow: 0px 0px 10px #0000003b;
  }  

`
