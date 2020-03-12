import React from 'react'
import Typist from 'react-typist';

const TypedEffect = (props) => {
  return (
    <Typist avgTypingDelay={props.intro ? 30 : 0}
      stdTypingDelay={0}
      startDelay={props.intro ? 3000 : props.startDelay}
      cursor={{element: props.intro ? '|' : '', hideWhenDone: true, hideWhenDoneDelay: 300}}
      {...props}
      style={{display: 'inlineBlock'}}>
      
    </Typist>
  )
}

export default TypedEffect
