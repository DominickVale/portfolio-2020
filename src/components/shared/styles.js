import styled, {css} from 'styled-components'
import constants from '../../constants'
import decorationObject1 from '../../../public/images/decoration_object_1.svg'

import mobileBorder from '../../../public/images/mobile_border.svg'
import menuBorder from '../../../public/images/menu_border.svg'


export const MobileBorder = css`
border-style: solid;
border-image-slice: 30 30 30 30;
border-image-width: 20px 20px 20px 20px;
border-image-outset: 30px 30px 30px 30px;
border-image-repeat: stretch space;
border-image-source: url(${mobileBorder});
  border-image-source: url(${menuBorder});
@media only screen and (min-width: 720px){
  border-image: none;
  border-style: unset;
}
`

export const MenuBorder = css`
${MobileBorder};
border-image-slice: 25 25 25 25;
border-image-width: 40px 40px 40px 40px;
border-image-outset: 28px 28px 28px 28px;
border-image-source: url(${menuBorder});
`

export const Button = styled.button`
padding: 0;
background: none;
border: none;
cursor: pointer;
`

export const Highlight = styled.span`
color: ${constants.highlightColor};
${props => props.secondary && css`
font-size: 0.8em;
font-weight: bold;
color: ${constants.navLinkColor};
cursor: pointer;
`}
`

export const SectionHeadline = styled.h2`
margin-top: 25vh;
margin-bottom: 10vh;
font-family: "HK Grotesk Bold";
font-size: 12vw;
color: transparent;
-webkit-text-stroke: 1px ${constants.sectionHeadlineColor};
@media only screen and (min-width: 800px){
font-size: calc(4rem + 2.6vw);
}
@media only screen and (min-width: 1440px){
font-size: calc(6rem + 3vw);
}
${MobileBorder}
`

export const ActionButtonContainer = styled.a`
cursor: pointer;
grid-area: button;
align-self: flex-start;
justify-self: ${props => props.left ? 'flex-start' : 'flex-end'};
position: relative;
right: 4%;
background-color: ${constants.backgroundObjectsColor};
padding: 1rem 2rem;
font-family: "HK Grotesk Bold";
color: ${constants.backgroundColor};
max-width: 12rem;
margin: 5vh auto;
&:visited{
  color: ${constants.backgroundColor};
}
&::after{
  content: "";
  pointer-events: none;
  user-select: none;
  display: inline-block;
  position: absolute;
  background-image: url(${decorationObject1});
  background-repeat: no-repeat;
  background-size: contain;
  right: -6%;
  width: 100%;
  height: 100%;
}
@media only screen and (min-width: 800px){
  margin: 5% 0;
  right: 10%;
  ${props => props.left && css`
  right: -3.8%;
  `}
}
`

export const Break = styled.div`
width: 100%;
margin-top: 1rem;
height: 1px;
${MobileBorder}
border-image-width: 20px 20px 0px 20px;
`