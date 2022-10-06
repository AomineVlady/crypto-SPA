import styled from "styled-components";
import { size } from "../styles/global";

export const AppContainer = styled.div`
  min-height: 100vh;
  max-width: 100%;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: ${size.laptop}) {
    padding: 1rem;
  }

  @media (max-width: ${size.tablet}) {
    padding: 0.5rem;
  }
`;


export const Main = styled.div`
  min-height: 100%;
  width: 100%;
  flex: 1;

  background-color: #fff;
  padding: 15px 30px 30px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  overflow-y: auto;

  @media (max-width: ${size.laptop}) {
    padding: 15px;
  }

  @media (max-width: ${size.tablet}) {
    padding: 0;
  }
`;
