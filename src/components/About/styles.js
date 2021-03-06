import styled from 'styled-components'
import constants from '../../constants'

import {MobileBorder} from '../shared/styles'
import {slowBlink} from '../shared/animations'



export const Container = styled.main`
position: relative;
display: flex;
flex-direction: column;
font-family: "HK Grotesk Bold";
margin-top: 10vh;
@media only screen and (min-width: 800px){
  margin-top: 14vh;
}
`

export const BackgroundH1 = styled.h1`
margin: 0;
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
border: none !important;
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
min-height: 16vh;
line-height: 113%;
z-index: 5;
@media only screen and (min-width: 900px){
  min-height: 22.1vh;
  max-width: 70vw;
  font-size: 3.8rem;
  margin-bottom: 1rem;
}
@media only screen and (min-width: 1440px){
  min-height: 28.1vh;
  max-width: 50vw;
  font-size: calc(2rem + 2.4vw);
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
  font-size: 0.9rem;
}
`

export const Description = styled.section`
z-index: 10;
font-family: "Space Mono";
color: ${constants.descriptionColor};
margin-top: 9vh;
font-size: 0.9rem;
min-height: 20vh;
border: none !important;
@media only screen and (min-width: 900px){
  font-size: 1rem;
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
position: relative;
margin-top: 2vh;
text-align: center;
object-fit: contain;
max-width: 10rem;
width: 6rem;
align-self: center;
height: 6rem;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: center;
animation: ${slowBlink} 0.2s infinite linear 16s;
svg{
  transform: scale(0.5);
}
@media only screen and (min-width: 900px){
  position: absolute;
  top: 45vh;
  text-align: left;
  align-self: flex-start;
  height: 10rem;
  width: 10rem;
  margin-top: 5vh;
  svg{
    transform: scale(0.8);
    position: relative;
  }
}
@media only screen and (min-width: 1300px){
  svg{
    transform: scale(0.8);
  }
}
@media only screen and (min-width: 1650px){
  svg{
    transform: scale(0.9);
  }
}
@media only screen and (min-width: 1750px){
  top: 50vh;
  svg{
    transform: scale(1);
  }
}
`