import styled from 'styled-components'
import constants from '../../constants'

import {Button, MenuBorder} from '../shared/styles'

export const MenuWrapper = styled.nav`
overflow: hidden;
position: fixed;
left: 0;
top: -100vh;
height: 100vh;
width: 100vw;
background-color: ${constants.backgroundColorOpacity};
z-index: 1000;
display: flex;
justify-content: center;
@media only screen and (min-width: 720px){
  display: none;
}
`

export const MenuContainer = styled.div`
position: relative;
background-color: ${constants.backgroundColor};
border-left: 1px solid ${constants.sectionHeadlineColor};
border-right: 1px solid ${constants.sectionHeadlineColor};
margin: 0 33px 20vh 33px;
width: 100%;
height: 100%;
left: 0;
top: 0;
z-index: 10;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const CloseButtonWrapper = styled.div`
position: relative;
margin: 5vh auto 4vh auto;
padding-bottom: 2.5vh;
text-align: center;
left: -1.5%;
${MenuBorder};
border-image-width: 0px 40px 40px 40px;
width: 102%;
`
export const CloseButton = styled(Button)`
svg path{
  transition: all 0.2s ease;
}
&:hover, &:active{
  svg path{
    fill: ${constants.backgroundObjectsColor};
    opacity: 1;
  }
}
`

export const MenuItem = styled.a`
cursor: pointer;
user-select: none;
position: relative;
left: -1.5%;
font-family: 'HK Grotesk Bold';
width: 102%;
margin: 5vh auto;
text-align: center;
font-size: calc(2rem + 1vw + 3vh);
font-weight: ${constants.navLinkWeight};
z-index: 20;
border-image-outset: 3vh 28px 3vh 28px;
opacity: 0.4;
-webkit-text-stroke: 1px ${constants.backgroundObjectsColor};
color: transparent;
&:active, &:hover{
  color: ${constants.navLinkColor};
  opacity: 1;
  ${MenuBorder};
}
`