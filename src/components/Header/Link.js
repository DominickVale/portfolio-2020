import React from 'react'

import {StyledLink} from './styles'

const Link = React.forwardRef((props, ref) => {
  return (
    <StyledLink {...props} ref={ref}>
      
    </StyledLink>
  )
})

export default Link
