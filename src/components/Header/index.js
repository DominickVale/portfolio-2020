import React from 'react'

import {Nav} from './styles'
import Link from './Link'

const index = () => {
  return (
    <header>
      <Nav>
        <Link href="#">about</Link>
        <Link href="#">projects</Link>
        <Link href="#">lab</Link>
        <Link href="#">contacts</Link>
      </Nav>
    </header>
  )
}

export default index
