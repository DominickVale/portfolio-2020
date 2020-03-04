import React from 'react'
import Typist from 'react-typist';

const TypedEffect = (props) => {
  return (
    <Typist avgTypingDelay={props.intro ? 80 : 10}
      stdTypingDelay={10}
      startDelay={props.intro ? 3000 : props.startDelay}
      cursor={{element: props.intro ? '|' : '', hideWhenDone: true, hideWhenDoneDelay: 300}}
      {...props}
      style={{display: 'inlineBlock'}}>
      
    </Typist>
  )
}

export default TypedEffect
