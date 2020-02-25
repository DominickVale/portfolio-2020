import styled from 'styled-components'
import constants from '../../constants'
import {Button} from '../shared/styles'

export const Nav = styled.nav`
display: flex;
justify-content: center;
@media only screen and (min-width: 720px){
  justify-content: end;
}
`

export const HamButton = styled(Button)`
outline: 1px solid red;
padding: 0.6rem;
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