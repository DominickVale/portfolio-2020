import React, {useEffect} from 'react'
import { ParallaxProvider, Parallax } from "react-skrollr";

import {StyledSectionHeadline} from './styles'


const SectionHeadline = (props) => {
  const data = {
    "data-bottom-top": `transform: translateX(${props.right ? 70 : -70}%);`,
    [`${props.contacts ? "data-top-bottom" : "data-top-bottom"}`]: `transform: translateX(${props.right ? -30 : 70}%);`
  };
  return (
    <ParallaxProvider
      init={{
        smoothScrollingDuration: 200,
        smoothScrolling: true,
        forceHeight: false
      }}
      getScrollTop={scrollTop => console.log("scrollTop", scrollTop)}>
      <StyledSectionHeadline contacts={props.contacts}>
        <Parallax data={data}>
          <h1>
            {props.children}
          </h1>
        </Parallax>
      </StyledSectionHeadline>
    </ParallaxProvider>
  )
}

export default SectionHeadline
