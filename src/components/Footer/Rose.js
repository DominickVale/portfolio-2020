import React, {useEffect, useRef} from 'react'
import styled from 'styled-components'
import gsap from 'gsap'

import {useMediaQuery} from 'react-responsive'
import {StyledRose} from './styles'
import rose from '../../../public/images/rose.png'

const Rose = React.forwardRef((props, ref) => {

  const isDesktop = useMediaQuery({query: '(min-width: 800px)'})

  return (
    <>
      <StyledRose src={rose} ref={ref} isDesktop={isDesktop}/>
    </>
  )
})

export default Rose
