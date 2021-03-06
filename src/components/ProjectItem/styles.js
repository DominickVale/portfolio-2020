import styled,{css} from 'styled-components';
import Img from 'gatsby-image'

import constants from '../../constants';
import objectHeadline from '../../../public/images/object_headline.svg'
import objectHeadline2 from '../../../public/images/object_headline_02.svg'
import imageBorder from '../../../public/images/image_border.svg'

import {MobileBorder, Highlight} from '../shared/styles'

const _isChrome = typeof window !== "undefined" && (!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime));


export const ProjectsContainer = styled.section`
`

export const ProjectContainer = styled.article`
display: flex;
flex-direction: column;
margin-bottom: 20vh;
@media only screen and (min-width: 840px){
  display: grid;
  grid-template-columns: 1.5fr 100px 1fr;
  grid-template-rows: auto auto 1fr;
  grid-column-gap: 0px;
  grid-template-areas:
  ". titleObj title"
  "image . details"
  "image . button";
  ${props => props.left && css`
    grid-template-columns: 1fr 100px 1.5fr;
    grid-template-areas:
    "title titleObj ."
    "details . image"
    "button . image";
  `}
}
@media only screen and (min-width: 1440px){
}
`



export const ProjectImage = styled.div`
visibility: hidden;
grid-area: image !important;
position: relative !important;
margin-bottom: 4vh;
border-image-width: 0px 20px 20px 20px;
&::after{
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${constants.highlightColor};
  mix-blend-mode: hue;
  opacity: 1;
  z-index: 10;
  transition: opacity 1s ease-in-out;
}
&:hover{
  &::after{
    opacity: 0;
  }
  .gatsby-image-wrapper{
    transform: scale(1) !important;
  }
}
div{
  height: 100%;
  width: 100%;
  z-index: 10 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gatsby-image-wrapper{
  max-height: 60vh !important;
  display: block;
  height: 90%;
  width: 90%;
  padding: 0.5rem;
  transform: scale(0.9);
  transition: transform 0.5s ease-in-out;
}
.imageBorder{
  transform-origin: ${props => props.left ? 'top left' : 'top right'};
  display: inline-block;
  position: absolute;
  border-style: solid !important;
  border-image-slice: 10 10 10 10 !important;
  border-image-width: 6px 6px 6px 6px !important;
  border-image-outset: 6px 0px 6px 5px !important;
  border-image-repeat: repeat repeat !important;
  border-image-source: url(${imageBorder}) !important;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 0 !important;
}
img{
  object-fit: contain !important;
}
@media only screen and (min-width: 1440px){
  max-height: 68vh !important;
}
`


export const ProjectTitle = styled.span`
visibility: visible;
display: border-box;
grid-area: title;
text-transform: uppercase;
text-align: center;
position: relative;
color: ${constants.headingColor};
font-size: ${constants.projectTitleSize};
font-family: "HK Grotesk Bold";
border: none !important;
margin-bottom: 8vh;
.titleBorder{
  visibility: hidden;
  position: absolute;
  border-top: solid;
  border-image-slice: 16 16 16 16;
  border-image-width: 2vw 2vw 2vw 2vw;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch stretch;
  border-image-source: url(${objectHeadline});
  transform: scale(1);
  height: 100%;
  width: 100%;
  left: 0%;
  top: 0%;
  @media only screen and (min-width: 800px){
    border-image-width: 1vw 1vw 1vw 1vw;
  }
}
.titleObject{
  visibility: hidden;
  grid-area: titleObj;
  display: none;
  position: absolute;
  background-image: url(${objectHeadline2});
  background-repeat: no-repeat;
  background-size: cover;
  left: -100px;
  bottom: 0;
  height: 50px;
  width: 100px;
  ${props => props.left && css`
    transform: scaleX(-1);
    left: unset;
    right: -100px;
  `}
}
@media only screen and (min-width: 840px){
  font-size: ${constants.projectTitleSizeDesktop};
  margin: 0;
  text-align: left;
  padding: 2rem;
  line-height: 90%;
  .titleObject{
    display: inline-block;    
  }
}
${_isChrome && css`
  padding: 2rem 2rem 1.3rem 2rem !important;
`//had to select only chrome to fix vertical alignment because ... chrome. 
}
${MobileBorder}
`

export const ProjectInformation = styled.div`
margin-top: 2vh;
margin-bottom: 2.5vh;
grid-area: details;
max-width: 90%;
margin-left: 2rem;
@media only screen and (min-width: 800px){
  margin-top: 10vh;
}
@media only screen and (min-width: 1440px){
}
`
export const ProjectDetail = styled.span`
display: flex;
flex-direction: row;
justify-content: start;
margin-top: 1rem;
`

export const ProjectDetailCaption = styled(Highlight)`
font-size: calc(0.6rem + 0.2vw);
font-family: "Space Mono";
margin-right: 2rem;
float: ${props => props.float ? props.float : 'none'};
margin-bottom: 1rem;
margin-top: 0.1rem;
max-width: 2rem;
`

export const ProjectDetailContent = styled.span`
font-family: ${props => props.bold ? "HK Grotesk Bold" : "HK Grotesk Regular"};
font-size: ${props => props.bold ? 'calc(0.9rem + 0.3vw)' : 'calc(0.8rem + 0.4vw)'};
color: ${constants.projectDescriptionColor};
@media only screen and (min-width: 800px){
font-size: ${props => props.bold ? 'calc(0.7rem + 0.3vw)' : 'calc(0.6rem + 0.4vw)'};
}
`

export const ProjectDescription = styled.div`
margin-top: 1rem;
display: block;
font-family: "HK Grotesk Regular";
color: ${constants.projectDescriptionColor};
@media only screen and (min-width: 800px){
  & span:nth-child(2){
    display: block;
    max-width: 100% !important;
    margin-left: 4rem;
  }
}
`