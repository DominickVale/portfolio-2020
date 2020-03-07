import React, {useEffect} from 'react'
import styled from 'styled-components'
import { ParallaxProvider, Parallax } from "react-skrollr";
import {useMediaQuery} from 'react-responsive'

import rose from '../../../public/images/rose.jpg'

const Rose = (props) => {

  const isDesktop = useMediaQuery({query: '(min-width: 800px)'})

  const roseParallaxData = {
    "data-anchor-target" : "#designs",
    "data-bottom-top" : `
        position: fixed;
        opacity: 0;
        left: -45%;
        bottom: -50%;
        mix-blend-mode: ${isDesktop ? 'color-dodge' : 'lighten'};
        max-width: 50vw;
        max-height: 50vh;`,
    "data--400-top-bottom" : `
        position: fixed;
        opacity: 1;
        left: -35%;
        ${isDesktop ? 'bottom: 35%;max-width: 100vw;max-height: 100vh;' : 'bottom: 50%;max-width: 300vw;max-height: 300vh;' }
`,
  }

  const Rose = styled.img`
  height: 100%;
  width: 100%;
  mix-blend-mode: ${isDesktop ? 'color-dodge' : 'lighten'};
  user-select: none;
  pointer-events: none;
  `

  const RoseContainer = styled.div`
  mix-blend-mode: ${isDesktop ? 'color-dodge' : 'lighten'};
  z-index: 0 !important;
  `

  return (
  <RoseContainer>
    <ParallaxProvider
      init={{
        smoothScrollingDuration: 200,
        smoothScrolling: true,
        forceHeight: true
      }}>
      <Parallax data={roseParallaxData}>
        <Rose src={rose} />
      </Parallax>
    </ParallaxProvider>
  </RoseContainer>
  )
}

export default Rose
