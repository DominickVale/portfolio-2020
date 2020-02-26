import React from 'react'

import {ActionButtonContainer} from './styles'

const ActionButton = (props) => {
  return (
    <ActionButtonContainer {...props}>
      {props.children}
    </ActionButtonContainer>
  )
}

export default ActionButton
