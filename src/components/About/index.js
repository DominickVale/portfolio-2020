import React, {useState, useEffect, useRef} from 'react'
import {TimelineMax} from 'gsap'
import Typist from 'react-typist';

import { Container, BackgroundH1, Intro, IntroCaption, IntroSubCaption,  Description, StyledArrow} from './styles'
import { Highlight } from '../shared/styles'
import TypedEffect from './TypedEffect'
import Read from './Read'
import { blinkIn, fadeInT } from '../shared/animations';
import {useIsDesktop} from '../shared/utils'

const About = () => {

  const isDesktop = useIsDesktop()
  
  const [descriptionExpanded, setDescriptionExp] = useState(false)
  const introCaptionRef = useRef(null)
  const subCaptionRef = useRef(null)
  const bgH1Ref = useRef(null)
  const descriptionRef = useRef(null)
  const readMoreRef = useRef(null)
  const arrowRef = useRef(null)

  const isIE =  typeof window !== "undefined" && (/*@cc_on!@*/false || !!document.documentMode);

  const readMoreHandler = () => {
    setDescriptionExp(state => !state)
  }


  useEffect(() => {
    const tl = new TimelineMax()
    if(!isIE) tl.add(blinkIn(bgH1Ref.current), 2.4)
                .add(blinkIn(introCaptionRef.current), '-=1')
                .add(fadeInT(subCaptionRef.current), '+=3')
                .add(fadeInT(readMoreRef.current), '+=3')
                .add(blinkIn(arrowRef.current), '+=2.2')
  }, [])

  /** Fix for typewriter effect completely hiding text on IE */
  const IEpolyFill = (<>
      <Intro>
        <IntroCaption ref={introCaptionRef}>
            I’m&nbsp;<Highlight darker>Domenico Vale</Highlight>,<br/>
            Front&#8209;end&nbsp;Web&nbsp;Developer<br/>
            &&nbsp;Designer.
        </IntroCaption>
        <IntroSubCaption ref={subCaptionRef}>Let's go. In and out. Two&nbsp;minutes&nbsp;adventure.</IntroSubCaption>
      </Intro>
    <Description ref={descriptionRef}>
        <Highlight>Who am i?</Highlight><br/><br/>
        I’m just a guy from Italy whose interests range from web development/design to reverse engineering, mountain-biking&nbsp;&&nbsp;various&nbsp;arts.&nbsp;
        <Read more
          ref={readMoreRef}
          expanded={descriptionExpanded}
          handler={readMoreHandler}/><br/><br/>

        {(descriptionExpanded || isDesktop) && (
          <>
            I see life as a progressive and competitive MMoRPG Game, in which you are supposed to improve on your skills and become the best possible version of yourself
            before&nbsp;the&nbsp;end&nbsp;game.&nbsp;
          <Read less ref={readMoreRef}
            expanded={descriptionExpanded}
            handler={readMoreHandler}/><br/><br/>
        </>)}
        
        I’m currently looking for a job as JavaScript 
        Front&#8209;end&nbsp;Developer.
    </Description>
  </>)




  return (
    <Container>
      <BackgroundH1 ref={bgH1Ref}>&lt;HI/&gt;</BackgroundH1>
      {isIE ? IEpolyFill : (
      <>
        <Intro>
          <IntroCaption ref={introCaptionRef}>
            <TypedEffect intro>
              I’m&nbsp;<Highlight darker>Domenico Vale</Highlight><Typist.Delay ms={300} />,<Typist.Delay ms={700} /><br/>
              Front&#8209;end&nbsp;Web&nbsp;Developer<Typist.Delay ms={300} /><br/>
              &&nbsp;Designer.
            </TypedEffect>
          </IntroCaption>
          <IntroSubCaption ref={subCaptionRef}>Let's go. In and out. Two&nbsp;minutes&nbsp;adventure.</IntroSubCaption>
        </Intro>
      <Description ref={descriptionRef}>
        <TypedEffect startDelay={8000}>
          <Highlight>Who am i?</Highlight><Typist.Delay ms={1500} /><br/><br/>
          I’m just a guy from Italy whose interests range from web development/design to reverse engineering, mountain-biking&nbsp;&&nbsp;various&nbsp;arts.&nbsp;</TypedEffect>
          <Read more
            ref={readMoreRef}
            expanded={descriptionExpanded}
            handler={readMoreHandler}/><br/>{(!isDesktop && !descriptionExpanded) && (<br/>)}

          {(descriptionExpanded || isDesktop) && (
            <>
            <TypedEffect startDelay={isDesktop ? 11000 : 0}>
              I see life as a progressive and competitive MMoRPG Game, in which you are supposed to improve on your skills and become the best possible version of yourself
              before&nbsp;the&nbsp;end&nbsp;game.&nbsp;
            </TypedEffect>
            <Read less ref={readMoreRef}
              expanded={descriptionExpanded}
              handler={readMoreHandler}/><br/>{!isDesktop && (<br/>)}
          </>)}
          
        <TypedEffect startDelay={isDesktop ? 13000 : 11500}>
          This portfolio website is being updated and, thus, currently outdated.
        </TypedEffect>
      </Description>
      </>)}
      <StyledArrow ref={arrowRef}>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.6" d="M44.25 76.0625V0.5H55.75V76.0625V77.2681L56.6032 76.4164L91.1872 41.8943L99.2929 50L50 99.2929L0.707107 50L8.87468 41.8324L43.3961 76.4157L44.25 77.2711V76.0625Z" stroke="#F3E7E7"/>
        </svg>
      </StyledArrow>
    </Container>
  )
}

export default About
