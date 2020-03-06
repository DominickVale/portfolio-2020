import React, {useEffect} from 'react'
import { ParallaxProvider, Parallax } from "react-skrollr";
import {useMediaQuery} from 'react-responsive'

import {StyledSectionHeadline} from './styles'


const SectionHeadline = (props) => {
  const isDesktop = useMediaQuery({query: '(min-width: 800px)'})

  const data = {
    "data-bottom-top": `transform: translateX(${props.right ? 70 : -80}vw);`,
    [`${props.contacts ? "data-center-center" : "data-center-top"}`]: `transform: translateX(${props.right ? 0 : 35}vw);`
  };

  const dataMobile = {
    "data-bottom-top": `transform: translateX(${props.right ? 80 : -80}vw);`,
    [`${props.contacts ? "data-center-center" : "data-center-top"}`]: `transform: translateX(${props.right ? 5 : 0}vw);`
  };


  return (
    <ParallaxProvider
      init={{
        smoothScrollingDuration: 200,
        smoothScrolling: true,
        forceHeight: false
      }}>
      <StyledSectionHeadline contacts={props.contacts}>
        <Parallax data={isDesktop ? data : dataMobile}>
          <h1>
            {props.children}
          </h1>
        </Parallax>
      </StyledSectionHeadline>
    </ParallaxProvider>
  )
}

export default SectionHeadline
