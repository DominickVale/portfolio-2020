import React from 'react'

import {StyledRose} from './styles'
import rose from '../../../public/images/rose.png'
import {useIsDesktop} from '../shared/utils'

const Rose = React.forwardRef((props, ref) => {

  const isDesktop = useIsDesktop()
  
  return (
    <>
      <StyledRose src={rose} ref={ref} isDesktop={isDesktop}/>
    </>
  )
})

export default Rose
