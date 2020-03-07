import React, {useEffect} from 'react'
import styled from 'styled-components'
import {useMediaQuery} from 'react-responsive'

import rose from '../../../public/images/rose.jpg'

const Rose = (props) => {

  const isDesktop = useMediaQuery({query: '(min-width: 800px)'})

  const Rose = styled.img`
  height: 100%;
  width: 100%;
  mix-blend-mode: ${isDesktop ? 'color-dodge' : 'lighten'};
  user-select: none;
  pointer-events: none;
  `

  const RoseContainer = styled.div`
  mix-blend-mode: ${isDesktop ? 'color-dodge' : 'lighten'};
  z-index: 0 !important;
  `

  return (
    <RoseContainer>
      <Rose src={rose} />
    </RoseContainer>
  )
}

export default Rose
