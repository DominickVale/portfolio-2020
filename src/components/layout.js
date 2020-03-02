import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import styled,{createGlobalStyle} from 'styled-components'
import constants from "../constants"
import 'normalize.css';
import './styles.css';

import noise from '../../public/images/noise.png'
import {noiseAnimation} from '../components/shared/animations'


const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
  background: black;
}

body{
  background-color: ${constants.backgroundColor};
  overflow-x: hidden;
  padding: 0 33px;
  color: beige;
  &::after{
    content: '';
    user-select: none;
    pointer-events: none;
    display: block;
    position: fixed;
    height: 300vh;
    width: 300vw;
    z-index: 1;
    left: -100%;
    top: -100%;
    opacity: 0.3;
    mix-blend-mode: overlay;
    background-image: url(${noise});
    animation: ${noiseAnimation} 1s steps(10) alternate infinite;
  }
  @media only screen and (min-width: 720px){
    padding: 0 62px;
  }
  @media only screen and (min-width: 1440px){
    padding: 0 5vw;
  }
}

a{
  color: ${constants.navLinkColor};
  text-decoration: none;
  &:visited{
    color: ${constants.navLinkColor};
  }
}

::selection{
  background-color: ${constants.selectionBG};
  color: ${constants.highlightColor};
  height: 50%;
}

::-webkit-scrollbar{
  background-color: ${constants.backgroundColor};
  width: 0.5vw !important;
}

::-webkit-scrollbar-thumb{
  background-color: ${constants.navLinkColor};
}
`


const Container = styled.div`
  padding-bottom: 2rem;
  @media only screen and (min-width: 720px){
    padding: 42px 0;
  }
`




const Layout = ({ children }) => {


  return (
    <Container>
      <GlobalStyle />
      <Header/>
      {children}
      <Footer />
    </Container>
  )
}


export default Layout
