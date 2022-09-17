import styled from "styled-components";

export const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  min-height: 300px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const PortfolioItemWrapp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const PortfolioItemButton = styled.button`
  padding: 5px;
  border: none;
  background-color: transparent;
`;
