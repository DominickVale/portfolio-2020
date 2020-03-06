import styled from 'styled-components'
import constants from '../../constants'
import {Button} from '../shared/styles'
import {navLinkBlink} from '../shared/animations'

export const StyledHeader = styled.header`
position: relative;
`;

export const Nav = styled.nav`
display: flex;
justify-content: center;
@media only screen and (min-width: 720px){
  justify-content: flex-end;
}
`

export const HamButton = styled(Button)`
padding: 0.8rem;
margin: 0.4rem;
svg path{
  transition: opacity 0.2s ease-in;
}
&:hover, &:active{
  svg{
    path{
      opacity: 1;
    }
  }
}
@media only screen and (min-width: 720px){
  display: none;
}
`

export const StyledLink = styled.a`
display: none;
font-family: 'Space Mono';
color: ${constants.navLinkColor};
font-size: ${constants.navLinkSize};
font-weight: ${constants.navLinkWeight};
margin: -0.2rem 0;
padding: 0.8rem;
transition: color .1s ease-in .28s;
&:hover{
animation: ${navLinkBlink} 0.2s ease;
color: ${constants.highlightColor};
}
@media only screen and (min-width: 720px){
  display: inline-block;
}
`

export const ProgressBarContainer = styled.div`
display: none;
position: absolute;
left: 0;
bottom: -1rem;
width: 0%;
@media only screen and (min-width: 720px){
  display: block;
}
`;

export const ProgressBar = styled.div`
height: 1px;
position: relative;
background-color: ${constants.descriptionColor};
&::after{
  content: "";
  display: inline-block;
  background-color: ${constants.headingColor};
  width: 7px;
  height: 7px;
  border-radius: 50%;
  position: absolute;
  right: -7px;
  top: -3px;
}
`;