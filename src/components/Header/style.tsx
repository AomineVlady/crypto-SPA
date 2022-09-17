import styled from "styled-components";

export const HeaderWrap = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 15px 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

export const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const HeaderIconButton = styled.button`
  background-color: transparent;
  padding: 5px 5px 4px 5px;
  margin: 0 10px;
  transition: background-color .3s ease;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  svg{
    width: 2.2rem;
    height: 2.2rem;
    fill: #ABD9FF;
    stroke-width: 1px;
    transition: fill .3s ease;

  }

  &:hover{
    background-color: #ABD9FF;
  }

  &:hover svg{
    fill: #fff;
  }

`;

export const TopRate = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  background-color: #FFF6BF;
  border-radius: 10px;
  margin: 0 10px;
  
  span {
    text-align: left;
    font-size: 0.8rem;
    color: #818181;
    margin-bottom:5px;
  }
  
  b{
    text-align: center;
    font-size: 1rem;
    color: #000000;
  }
`
