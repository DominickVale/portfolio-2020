import React from "react"
import styled from 'styled-components'

import Layout, {NoiseBG} from "../components/layout"
import constants from "../constants";



const isIE = /*@cc_on!@*/false || !!document.documentMode;

const Wrapper = styled.main`
height: 100vh;
width: 100vw;
background-color: ${constants.backgroundColor};
display: flex;
justify-content: center;
align-items: center;

`

const FourOFour = styled.h1`
font-family: "Space Mono";
font-size: 10vw;
font-weight: bold;
color: ${constants.highlightColor};
text-align: center;
`


const NotFoundPage = () => (
  <Wrapper>
  {!isIE && (<NoiseBG />)}
    <FourOFour>404 much?</FourOFour>
  </Wrapper>
)

export default NotFoundPage
