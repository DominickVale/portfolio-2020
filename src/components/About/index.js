import React from 'react'
import { Container, BackgroundH1, Intro, IntroCaption, IntroSubCaption,  Description} from './styles'
import { Highlight } from '../shared/styles'

const index = () => {
  return (
    <Container>
      <BackgroundH1>&lt;HI/&gt;</BackgroundH1>
        <Intro>
          <IntroCaption>I’m&nbsp;<Highlight>Domenico Vale</Highlight>,
          Front&#8209;end&nbsp;Web&nbsp;Developer 
          &&nbsp;Designer.</IntroCaption>
          <IntroSubCaption>Let's go. In and out. Two&nbsp;minutes&nbsp;adventure.</IntroSubCaption>
        </Intro>
      <Description><Highlight>Who am i?</Highlight><br/><br/>
        I’m Domenico Vale, a 21 years old guy from Italy whose interests range from web development/design to reverse engineering, rock, nature & sportbikes.<br/>
        I see life as a progressive and competitive MMoRPG Game, in which you are supposed to improve on your skills and become the best possible version of yourself before the end game.<br/>
        I’m currently looking for a job as JavaScript 
        Front&#8209;end&nbsp;Developer.</Description>
    </Container>
  )
}

export default index
