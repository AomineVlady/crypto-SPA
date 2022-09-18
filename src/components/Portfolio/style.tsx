import styled from "styled-components";

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-width: 500px;
  min-height: 300px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;

  .empty__message{
    margin: auto;
  }
`;

export const PortfolioItemWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 100%;
  padding: 5px 20px;
`;

export const PortfolioItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 20px;
`;

export const PortfolioItemButton = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 25px;
  background-color: #d1d1d19b;
  cursor: pointer;
  transition: all .3s ease;

  &:hover{
    background-color: #ffd3759b;
  }
  &:active{
    transform: scale(.9);
  }
`;
