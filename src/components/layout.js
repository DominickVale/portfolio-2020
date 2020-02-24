import React from "react"

import Header from "./Header"
import styled,{createGlobalStyle} from 'styled-components'
import constants from "../constants"
import 'normalize.css';
import './styles.css';
import bg from '../../public/images/bg.svg'




const GlobalStyle = createGlobalStyle`
body{
  background-color: ${constants.backgroundColor};
  padding: 0 33px;
  color: beige;
  @media only screen and (min-width: 720px){
    padding: 0 62px;
  }
}
`


const Container = styled.div`
  background-image: url(${bg});
  background-repeat: repeat-y;
  background-size: contain;
  padding: 42px 0;
`




const Layout = ({ children }) => {


  return (
    <Container>
      <GlobalStyle />
      <Header/>
      {children}
    </Container>
  )
}


export default Layout
