import React from 'react'

import {StyledRose} from './styles'
import rose from '../../../public/images/rose.png'
import {isDesktop} from '../shared/utils'

const Rose = React.forwardRef((props, ref) => {

  return (
    <>
      <StyledRose src={rose} ref={ref} isDesktop={isDesktop}/>
    </>
  )
})

export default Rose
