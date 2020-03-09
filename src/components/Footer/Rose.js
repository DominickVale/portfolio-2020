import React from 'react'

import {StyledRose} from './styles'
import rose from '../../../public/images/rose.png'

const Rose = React.forwardRef((props, ref) => {
  
  return (
    <>
      <StyledRose src={rose} ref={ref}/>
    </>
  )
})

export default Rose
