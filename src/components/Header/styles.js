import styled from 'styled-components'
import constants from '../../constants'
import {Button} from '../shared/styles'

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
margin-right: 1rem;
@media only screen and (min-width: 720px){
  display: inline-block;
}
`

export const ProgressBarContainer = styled.div`
position: absolute;
left: 0;
bottom: -1rem;
width: 73%;
`;

export const ProgressBar = styled.div`
height: 1px;
position: relative;
background-color: ${constants.backgroundObjectsColor};
&::after{
  content: "";
  display: inline-block;
  background-color: inherit;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  position: absolute;
  right: -7px;
  top: -3px;
}
`;