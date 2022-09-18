import styled from "styled-components";

export const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #4e2900a3;
  z-index: 999;
  cursor: pointer;
`

export const DialogWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 25px;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  z-index: 999;
  cursor: auto;

`

export const DialogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 5px;
  b{
    font-size: 1.2rem;
    margin-right: 10px;
    padding: 5px 0;
  }
`
export const DialogBody = styled.div`

`
export const DialogCloseButton = styled.button`
  border-radius: 25px;
  padding: 7px 7px 5px 7px;
  border: none;
  background-color: transparent;
  border: 25px;
  transition: all .3s ease;

  cursor: pointer;
  
  &:hover{
    background-color: #C3F8FF;
  }

  &:active{
    transform: scale(1.1)
  }
`
