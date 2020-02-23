import React from 'react'

import {Nav, HamButton} from './styles'
import Link from './Link'

const index = () => {
  return (
    <header>
      <Nav>
        <HamButton>
          <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M0 8H22V5.81818H0V8ZM0 2.18182H22V0H0V2.18182Z" fill="#FAF3F3"/>
          </svg>
        </HamButton>
        <Link href="#">about</Link>
        <Link href="#">projects</Link>
        <Link href="#">lab</Link>
        <Link href="#">contacts</Link>
      </Nav>
    </header>
  )
}

export default index
