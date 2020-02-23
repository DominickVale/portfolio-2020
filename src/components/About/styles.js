import styled from 'styled-components'
import constants from '../../constants'

export const Container = styled.main`
position: relative;
display: flex;
flex-direction: column;
font-family: "HK Grotesk Bold";
margin-top: 10vh;
`

export const BackgroundH1 = styled.h1`
margin: 0;
position: absolute;
left: -4.6rem;
top: -4rem;
font-size: 4.7rem;
opacity: 0.4;
color: transparent;
-webkit-text-stroke: 1px ${constants.backgroundObjectsColor};
`
export const Intro = styled.section`
display: flex;
flex-direction: column;
margin-top: -6vh;
`

export const IntroCaption = styled.h2`
color: white;
font-weight: bold;
font-size: 7vw;
`

export const IntroSubCaption = styled.h3`
font-family: "Space Mono";
font-weight: 400;
font-size: 3.6vw;
color: ${constants.descriptionColor};
opacity: 0.6;
margin-top: -1rem;
`

export const Description = styled.section`
font-family: "Space Mono";
color: ${constants.descriptionColor};
margin-top: 10vh;
`