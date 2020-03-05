import styled, {css} from 'styled-components'
import constants from '../../constants'
import decorationObject1 from '../../../public/images/decoration_object_1.svg'

import mobileBorder from '../../../public/images/mobile_border.svg'
import menuBorder from '../../../public/images/menu_border.svg'
import {actionBgGlitch, navLinkBlink} from './animations';

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
color: ${props=> props.darker ? constants.highlightColorDarker : constants.highlightColor};
${props => props.secondary && css`
font-size: 0.8em;
font-weight: bold;
color: ${constants.navLinkColor};
cursor: pointer;
`}
`

export const ActionButtonContainer = styled.a`
grid-area: button;
cursor: pointer;
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
transition: all 0.5s ease;
&:hover{
  animation: ${navLinkBlink} 0.3s ease;
  background-color: ${constants.backgroundColor};
  color: ${constants.headingColor};
  outline: 1px solid ${constants.backgroundObjectsColor};
  &:visited{
    color: ${constants.headingColor};
  }
  &::before{
    animation: ${actionBgGlitch} 0.1s 6 linear;
  }
}
&:visited{
  color: ${constants.backgroundColor};
}
&:active{
  color: ${constants.highlightColor};
  background-color: rgba(20, 0, 0, 0.4);
}
&::before{
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