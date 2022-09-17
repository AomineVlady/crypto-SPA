import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    font-family: 'Open Sans', 'Tahoma', sans-serif;
    font-size: 16px;
    color: #000; 
    box-sizing: border-box;
  };

  body{
    background-color: #C3F8FF;
    min-height: 100vh;
    width: 100%;
    overflow-y: auto;
  }
`;
