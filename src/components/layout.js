import React, {useEffect, useState, useRef} from "react"
import gsap, {Expo} from 'gsap'

import Header from "./Header"
import Footer from "./Footer"
import styled,{createGlobalStyle, css, keyframes} from 'styled-components'
import constants from "../constants"
import 'normalize.css';
import './styles.css';

import noise from '../../public/images/noise.png'
import grid from '../../public/images/grid.svg'
import {noiseAnimation} from '../components/shared/animations'




const isIE =  typeof window !== "undefined" && (/*@cc_on!@*/false || !!document.documentMode);

const loadingScreenAnim = keyframes`
0%{opacity: 1;}
100%{opacity: 0;}`

const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
  background: black;
}

body{
  background-image: url(${grid});
  background-color: ${constants.backgroundColor};
  background-repeat: repeat;
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

a, button{
  &:focus{
    position: relative;
    outline-style:none;
    box-shadow:none;
    border-color:transparent;
    outline: 1px dotted ${constants.headingColor} !important;
    outline-offset: 0.2rem;
    &::before{
      content: "";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }
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

const LoadingScreen = styled.div`
opacity: 1;
position: fixed;
height: 100vh;
width: 100vw;
z-index: 100000;
background-color: ${constants.backgroundColor};
animation: ${loadingScreenAnim} 2s ease-out 15s;
top: 0;
left: 0;
`

export const NoiseBG = styled.div`
z-index: ${props => props.zIndex || 1};
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

  const [loading, setLoading] = useState(true);
  const loadingScreenRef = useRef(null)

  useEffect(() => {
    gsap.to(loadingScreenRef.current, {
      opacity: 0,
      zIndex: -100,
      duration: 3,
      ease: Expo.easeOut,
      onComplete: () => setLoading(false)})
  }, [])

  return (
    <Container>
      {!isIE && (<NoiseBG/>)}
      {loading && (
      <LoadingScreen ref={loadingScreenRef}>
        <NoiseBG zIndex={100000}/>
      </LoadingScreen>)}
      <GlobalStyle />
      <Header/>
      {children}
      <Footer />
    </Container>
  )
}


export default Layout
