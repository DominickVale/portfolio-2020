import styled from 'styled-components'
import constants from '../../constants'

export const Nav = styled.nav`
display: flex;
justify-content: end;
`

export const StyledLink = styled.a`
font-family: 'Space Mono';
color: ${constants.navLinkColor};
font-size: ${constants.navLinkSize};
font-weight: ${constants.navLinkWeight};
margin-right: 1rem;
a&{
  text-decoration: none;
}
`