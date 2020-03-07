import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import styled,{createGlobalStyle, css} from 'styled-components'
import constants from "../constants"
import 'normalize.css';
import './styles.css';

import noise from '../../public/images/noise.png'
import {noiseAnimation} from '../components/shared/animations'




const isIE =  typeof window !== "undefined" && (/*@cc_on!@*/false || !!document.documentMode);

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

export const NoiseBG = styled.div`
z-index: 1;
opacity: 0.5;
position: fixed;
pointer-events: none;
mix-blend-mode: overlay;
min-height: 100vh;
height: 100%;
width: 100%;
top: 0;
left: 0;
&::after{
  content: '';
  user-select: none;
  pointer-events: none;
  background-image: url(${noise});
  background-repeat: repeat;
  background-position: 0;
  animation: ${noiseAnimation} 1s steps(5) alternate infinite;
  transform: translate(0,0);
  position: absolute;
  width: 200%;
  height: 200%;
  left: -50%;
  top: -50%;
}
`


const Layout = ({ children }) => {


  return (
    <Container>
      {!isIE && (<NoiseBG/>)}
      <GlobalStyle />
      <Header/>
      {children}
      <Footer />
    </Container>
  )
}


export default Layout
