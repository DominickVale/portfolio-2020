import styled from 'styled-components'
import constants from '../../constants'

import {MobileBorder} from '../shared/styles'



export const Container = styled.main`
position: relative;
display: flex;
flex-direction: column;
font-family: "HK Grotesk Bold";
margin-top: 10vh;
`

export const BackgroundH1 = styled.h1`
margin: 0;
z-index: -1;
position: absolute;
left: -10vw;
top: -4.5rem;
font-size: 4.7rem;
opacity: 0.4;
color: transparent;
-webkit-text-stroke: 1px ${constants.backgroundObjectsColor};
@media only screen and (min-width: 900px){
  font-size: 9vw;
  top: -6vw;
  left: -8vw;
}
@media only screen and (min-width: 1440px){
  font-size: 9rem;
  top: -6rem;
  left: -6rem;
}
`
export const Intro = styled.section`
display: flex;
flex-direction: column;
margin-top: -6vh;
@media only screen and (min-width: 720px){
  margin-left: 1rem;
}
@media only screen and (min-width: 1440px){
  margin-left: 1.5rem;
}
${MobileBorder}
`

export const IntroCaption = styled.h2`
color: white;
font-weight: bold;
font-size: 7vw;
line-height: 113%;
@media only screen and (min-width: 900px){
  max-width: 70vw;
  font-size: 3.8rem;
  margin-bottom: 1rem;
}
@media only screen and (min-width: 1440px){
  max-width: 50vw;
  font-size: calc(2rem + 2.6vw);
  margin-bottom: 1rem;
}

`

export const IntroSubCaption = styled.h3`
font-family: "Space Mono";
font-weight: 400;
font-size: 0.76rem;
color: ${constants.descriptionColor};
opacity: 0.6;
margin-top: -0.9rem;
@media only screen and (min-width: 900px){
  margin-top: 0.4vh;
  font-size: 0.8rem;
}
`

export const Description = styled.section`
font-family: "Space Mono";
color: ${constants.descriptionColor};
margin-top: 12vh;
font-size: 0.9rem;
@media only screen and (min-width: 900px){
  margin-left: 50vw;
  margin-top: 0vh;
  margin-right: 1rem;
}
@media only screen and (min-width: 1440px){
  margin-left: 60vw;
  margin-top: -3vh;
}
@media only screen and (min-width: 1650px){
  margin-top: 0;
}
@media only screen and (min-width: 1750px){
  margin-top: 1vw;
}
${MobileBorder}
`

export const StyledArrow = styled.div`
margin-top: 5vh;
text-align: center;
transform: scale(0.4);
object-fit: contain;
max-width: 10rem;
@media only screen and (min-width: 900px){
  position: relative;
  transform: scale(0.6);
  text-align: left;
  svg{
    position: relative;
    left: 2vw;
    top: 2vw;
  }
}
@media only screen and (min-width: 1300px){
  transform: scale(0.8);
}
@media only screen and (min-width: 1650px){
  transform: scale(0.9);
}
@media only screen and (min-width: 1750px){
  transform: scale(1);
}
`