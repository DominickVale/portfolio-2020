import React, {useEffect, useRef} from 'react'
import {useMediaQuery} from 'react-responsive'
import gsap, {TimelineMax, Expo, Sine} from 'gsap'

import ParallaxAnimation from '../ParallaxAnimation'
import {StyledSectionHeadline} from './styles'


const SectionHeadline = (props) => {
  const isDesktop = useMediaQuery({query: '(min-width: 800px)'})
  const elementRef = useRef(null)
  const sectionRef = useRef(null)
  const animationRef = useRef(null)


  useEffect(() => {
    animationRef.current = new TimelineMax({paused: true}).from(elementRef.current, { marginLeft: props.toLeft ? '55vw' : '-55vw', ease: Sine.easeOut})

  }, [])

  return (
    <ParallaxAnimation
      smooth
      animation={animationRef}
      element={sectionRef}
      startOffset={-400}
      endOffset={props.contacts ? 0 : 400}>
      <StyledSectionHeadline ref={sectionRef} toLeft={props.toLeft}>
        <h1 ref={elementRef}>
          {props.children}
        </h1>
      </StyledSectionHeadline>
    </ParallaxAnimation>
  )
}

export default SectionHeadline
