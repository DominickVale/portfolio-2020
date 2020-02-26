import styled,{css} from 'styled-components';
import Img from 'gatsby-image'

import constants from '../../constants';
import objectHeadline1 from '../../../public/images/object_headline_1.svg'
import {MobileBorder, Highlight} from '../shared/styles'

export const ProjectContainer = styled.article`
display: flex;
flex-direction: column;
margin-bottom: 20vh;
@media only screen and (min-width: 840px){
  display: grid;
  grid-template-columns: 3fr 4fr;
  grid-template-rows: 100% 100% 1fr;
  grid-column-gap: 4%;
  grid-template-areas:
  "image title"
  "image details"
  "image button";
  ${props => props.left && css`
    grid-template-areas:
    "title image"
    "details image"
    "button image";
    grid-template-columns: 4fr 3fr;
  `}
}
@media only screen and (min-width: 1440px){
}
`

export const ProjectTitle = styled.h1`
position: relative;
grid-area: title;
color: ${constants.headingColor};
font-size: ${constants.projectTitleSize};
text-align: center;
font-family: "HK Grotesk Bold";
&::before{
  overflow-x: hidden;
  content: "";
  display: none;
  position: absolute;
  border-image-slice: 16 16 16 16;
  border-image-width: 20px 20px 20px 20px;
  border-image-outset: 0px 0px 0px 0px;
  border-image-repeat: stretch stretch;
  border-image-source: url(${objectHeadline1});
  height: 100%;
  width: 200%;
  left: 0;
  top: 0;
  z-index: -1;
  ${props => props.left && css`
  transform: scaleX(-1);
  left: auto;
  right: 0;
  `}
}
@media only screen and (min-width: 840px){
  font-size: ${constants.projectTitleSizeDesktop};
  margin: 0;
  padding: 1.6rem;
  text-align: left;
  line-height: 80%;
  &::before{
    display: inline-block;
  }
}
${MobileBorder}
`

export const ProjectImage = styled(Img)`
grid-area: image;
max-height: 60vh !important;
margin-bottom: 4vh;
img{
  object-fit: contain !important;
}
${MobileBorder}
border-image-width: 0px 20px 20px 20px;
`

export const ProjectInformation = styled.div`
grid-area: details;
max-width: 90%;
margin-left: 1rem;
`
export const ProjectDetail = styled.span`
display: flex;
flex-direction: row;
justify-content: start;
margin-top: 1rem;
`

export const ProjectDetailCaption = styled(Highlight)`
font-size: 0.8rem;
font-family: "Space Mono";
margin-right: 2rem;
float: ${props => props.float ? props.float : 'none'};
margin-bottom: 1rem;
margin-top: 0.1rem;
max-width: 2rem;
`

export const ProjectDetailContent = styled.span`
font-family: ${props => props.bold ? "HK Grotesk Bold" : "HK Grotesk Regular"};
font-size: 1rem;
color: ${constants.projectDescriptionColor};
`

export const ProjectDescription = styled.div`
margin-top: 1rem;
display: block;
font-family: "HK Grotesk Regular";
color: ${constants.projectDescriptionColor};

`