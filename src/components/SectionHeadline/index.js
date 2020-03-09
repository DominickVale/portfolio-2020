import React, {useEffect, useRef} from 'react'
import gsap, {TimelineMax, Expo, Sine} from 'gsap'

import ParallaxAnimation from '../ParallaxAnimation'
import {StyledSectionHeadline} from './styles'


const SectionHeadline = React.forwardRef((props, ref) => {

  const elementRef = useRef(null)
  const sectionRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    animationRef.current = new TimelineMax({paused: true}).from(elementRef.current, { marginLeft: props.toLeft ? '55vw' : '-55vw', ease: Sine.easeOut})

  }, [])

  return (
    <section ref={ref}>
      <ParallaxAnimation
        smooth
        animation={animationRef}
        element={sectionRef}
        startOffset={-400}
        endOffset={200}>
        <StyledSectionHeadline ref={sectionRef} toLeft={props.toLeft}>
          <h1 ref={elementRef}>
            {props.children}
          </h1>
        </StyledSectionHeadline>
      </ParallaxAnimation>
    </section>
  )
})

export default SectionHeadline
