import React, {useEffect} from 'react'
import {useMediaQuery} from 'react-responsive'

import {StyledSectionHeadline} from './styles'


const SectionHeadline = (props) => {
  const isDesktop = useMediaQuery({query: '(min-width: 800px)'})

  return (
    <StyledSectionHeadline>
      <h1>
        {props.children}
      </h1>
    </StyledSectionHeadline>
  )
}

export default SectionHeadline
