import React, {useState} from 'react'
import {useMediaQuery} from 'react-responsive'
import { Container, BackgroundH1, Intro, IntroCaption, IntroSubCaption,  Description, StyledArrow} from './styles'
import { Highlight } from '../shared/styles'

const About = () => {

  const [descriptionExpanded, setDescriptionExp] = useState(false)

  const readMoreHandler = () => {
    setDescriptionExp(state => !state)
  }

  const isDesktop = useMediaQuery({query: '(min-width: 800px)'})
  
  
  const Read = (props)=>{
    
    if(!isDesktop){
      return(<Highlight secondary onClick={readMoreHandler}>
        {props.more ? descriptionExpanded ? null : 'Read more!' : 'Read less...'}
        </Highlight>)
    } else {
      return null;
    }
  }

  return (
    <Container>
      <BackgroundH1>&lt;HI/&gt;</BackgroundH1>
        <Intro>
          <IntroCaption>I’m&nbsp;<Highlight darker>Domenico Vale</Highlight>,
          Front&#8209;end&nbsp;Web&nbsp;Developer 
          &&nbsp;Designer.</IntroCaption>
          <IntroSubCaption>Let's go. In and out. Two&nbsp;minutes&nbsp;adventure.</IntroSubCaption>
        </Intro>
      <Description><Highlight>Who am i?</Highlight><br/><br/>
        I’m a 21 years old guy from Italy whose interests range from web development/design to reverse engineering, rock, nature & sportbikes.&nbsp;
        <Read more /><br/><br/>

        {(descriptionExpanded || isDesktop) && (
          <>
            I see life as a progressive and competitive MMoRPG Game, in which you are supposed to improve on your skills and become the best possible version of yourself
            before the end game.&nbsp;<Read less /><br/><br/>
        </>)}

        I’m currently looking for a job as JavaScript 
        Front&#8209;end&nbsp;Developer.</Description>
      <StyledArrow>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.6" d="M44.25 76.0625V0.5H55.75V76.0625V77.2681L56.6032 76.4164L91.1872 41.8943L99.2929 50L50 99.2929L0.707107 50L8.87468 41.8324L43.3961 76.4157L44.25 77.2711V76.0625Z" stroke="#F3E7E7"/>
        </svg>
        <p>scroll down!</p>
      </StyledArrow>
    </Container>
  )
}

export default About
