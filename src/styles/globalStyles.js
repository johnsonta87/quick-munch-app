import React from 'react';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  html, body {
    padding: 0;
    margin: 0;
    height: 100%;
    line-height: 1.15;
  }

  body {
    font-family: ${(props) => props.theme.primaryFont};
    background: #f8f8fc;
    background: linear-gradient(45deg,#f8f8fc,#e6e6fa);
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  div#root {
    width: 100%;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    padding: 1em;
    border: 0;
    background-color: ${(props) => props.theme.lightGrayColor};
    border-radius: 0.5em;
    margin-bottom: 1em;

    &:active,
    &:focus {
      outline: 0;
    }
  }

`;

const GlobalStyles = () => <CustomStyles />;

export default GlobalStyles;
