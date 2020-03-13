import React from "react"
import { Link } from "gatsby"
import {Helmet} from 'react-helmet'
import styled from 'styled-components'

import Layout, {NoiseBG} from "../components/layout"
import constants from "../constants";


const isIE =  typeof window !== "undefined" && (/*@cc_on!@*/false || !!document.documentMode);

const Wrapper = styled.main`
height: 100vh;
width: 100vw;
background-color: ${constants.backgroundColor};
display: flex;
justify-content: center;
align-items: center;

`

const FourOFour = styled(Link)`
cursor: pointer;
text-decoration: none;
user-select: none;
font-family: "Space Mono";
font-size: 10vw;
font-weight: bold;
color: ${constants.highlightColor};
text-align: center;
`


const NotFoundPage = () => (
  <Wrapper>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="I’m a 21 years old Front-end Web Developer from Italy. I’m currently looking for a job as JavaScript Front-end Developer." />
      <title>Domenico Vale doesn't know what are you trying to access here</title>
      <link rel="canonical" href="https://domenicovale.netlify.com/404" />
    </Helmet>
  {!isIE && (<NoiseBG />)}
    <FourOFour to="/">404 much?</FourOFour>
  </Wrapper>
)

export default NotFoundPage
