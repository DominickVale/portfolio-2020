import React from "react"

import Header from "./Header"
import Footer from "./Footer"
import styled,{createGlobalStyle} from 'styled-components'
import constants from "../constants"
import 'normalize.css';
import './styles.css';
import bg from '../../public/images/bg.svg'




const GlobalStyle = createGlobalStyle`
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
`


const Container = styled.div`
  padding: 42px 0;
  @media only screen and (min-width: 720px){
    background-image: url(${bg});
    background-repeat: repeat-y;
    background-size: contain;
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
