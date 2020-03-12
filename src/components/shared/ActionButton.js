import React from 'react'

import {ActionButtonContainer} from './styles'

const ActionButton = React.forwardRef((props, ref) => {
  return (
    <ActionButtonContainer {...props} ref={ref}>
      {props.children}
    </ActionButtonContainer>
  )
})

export default ActionButton
