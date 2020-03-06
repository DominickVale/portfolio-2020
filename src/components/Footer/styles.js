import styled from 'styled-components'
import constants from '../../constants'

import {MobileBorder} from '../shared/styles'
import {navLinkBlink} from '../shared/animations'

export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
@media only screen and (min-width: 800px){
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 3fr 1fr 1fr;
  grid-template-areas:
  "arrow info quote"
  ". socials ."
  ". credit .";
}
`

export const IconsContainer = styled.section`
grid-area: socials;
display: flex;
justify-content: space-between;
justify-self: center;
width: 100%;
border: none !important;
@media only screen and (min-width: 800px){
  max-width: 60%;
}
${MobileBorder};
`

export const IconWrapper = styled.a`
svg g, path{
  transition: all 0.1s ease 0.38s;
}
&:hover{
  animation: ${navLinkBlink} 0.38s linear;
  svg g, path{
    fill: ${constants.highlightColorDarkest};
    opacity: 1;
  }
}
`;

export const ContactInfo = styled.div`
grid-area: info;
display: flex;
justify-content: space-between;
max-width: 30rem;
margin: 5vh auto 10vh auto;
z-index: 0;
`

export const Captions = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
font-family: "Space Mono";
font-size: 0.8rem;
span{
  margin: 0.66rem 0;
}
`

export const Content = styled(Captions)`
justify-content: flex-start;
align-items: flex-start;
margin-left: 1rem;
color: ${constants.navLinkColor};
font-family: "HK Grotesk Bold";
font-size: 1rem;
p{
  margin: 0.5rem 0;
}
p:last-of-type{
  margin-top: 0.6rem;
}
`

export const DevelopedBy = styled.div`
grid-area: credit;
font-family: "Space Mono";
font-size: 0.8rem;
text-align: center;
width: 100%;
color:  ${constants.descriptionColor};
opacity: 0.6;
margin: 0;
margin-top: 7vh;
p{
  margin: 0;
}
`

export const QuoteSection = styled.section`
grid-area: quote;
display: none;
margin-bottom: 5vh;
color: ${constants.descriptionColor};
font-family: "Space Mono";
font-size: calc(0.6rem + 0.3vw);
@media only screen and (min-width: 800px){
  display: block;
}`

export const StyledArrow = styled.a`
display: none;
object-fit: contain;
transform: rotateX(180deg);
& p{
  transform: rotateX(-180deg);
  margin-left: 0.8rem;
  color: rgba(243, 231,231, 0.4);
  font-family: "Space Mono";
  font-weight: bold;
  opacity: 0.4;
  font-size: calc(0.6rem + 0.2vw);
}

& p, svg{
  cursor: pointer;
}
@media only screen and (min-width: 800px){
  display: block;
  & p{
    margin-left: 0.7rem;
  }
}
@media only screen and (min-width: 1440px){
  & p{
    margin-left: 0.4rem;
  }
}
@media only screen and (min-width: 1650px){
}
@media only screen and (min-width: 1750px){
}
`