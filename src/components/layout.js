import React from "react"

import Header from "./Header"
import {createGlobalStyle} from 'styled-components'
import constants from "../constants"
import 'normalize.css';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'HK Grotesk Regular';
  font-style: normal;
  font-weight: normal;
  src: local('HK Grotesk Regular'), url('../../public/fonts/HKGrotesk-Regular.woff') format('woff');
}

@font-face {
  font-family: 'HK Grotesk Bold';
  font-style: normal;
  font-weight: normal;
  src: local('HK Grotesk Bold'), url('../../public/fonts/HKGrotesk-Bold.woff') format('woff');
}
body{
  background-color: ${constants.backgroundColor};
  padding: 42px 33px;
  color: beige;
  @media only screen and (min-width: 720px){
    padding: 42px 62px;
  }
}
`


const Layout = ({ children }) => {


  return (
    <>
      <GlobalStyle />
      <Header/>
      {children}
    </>
  )
}


export default Layout
