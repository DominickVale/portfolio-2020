import React from 'react'
import { Container, BackgroundH1, Intro, IntroCaption, IntroSubCaption,  Description} from './styles'

const index = () => {
  return (
    <Container>
      <BackgroundH1>&lt;HI/&gt;</BackgroundH1>
        <Intro>
          <IntroCaption>I’m&nbsp;Domenico Vale,
          Front&#8209;end&nbsp;Web&nbsp;Developer 
          &&nbsp;Designer.</IntroCaption>
          <IntroSubCaption>Let's go. In and out. Two&nbsp;minutes&nbsp;adventure.</IntroSubCaption>
        </Intro>
      <Description>Who am i?
        I’m Domenico Vale, a 21 years old guy from Italy whose interests range from web development/design to reverse engineering, rock, nature & sportbikes. I see life as a progressive and competitive MMoRPG Game, in which you are supposed to improve on your skills and become the best possible version of yourself before the end game.
        I’m currently looking for a job as JavaScript 
        Front-end Developer.</Description>
    </Container>
  )
}

export default index
