import React, {useState} from 'react'

import {StyledHeader, Nav, HamButton, ProgressBar, ProgressBarContainer} from './styles'
import Link from './Link'
import Menu from '../Menu'

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <StyledHeader>
      <ProgressBarContainer>
        <ProgressBar/>
      </ProgressBarContainer>
      {menuOpen && (<Menu onClose={() => setMenuOpen(false)}/>)}
      <Nav>
        <HamButton onClick={() => setMenuOpen(true)}>
          <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M0 8H22V5.81818H0V8ZM0 2.18182H22V0H0V2.18182Z" fill="#FAF3F3"/>
          </svg>
        </HamButton>
        <Link href="#about">about</Link>
        <Link href="#projects">projects</Link>
        <Link href="#designs">designs</Link>
        <Link href="#contacts">contacts</Link>
      </Nav>
    </StyledHeader>
  )
}

export default Header
