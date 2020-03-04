import React from 'react'
import {useMediaQuery} from 'react-responsive'
import { Highlight } from '../shared/styles'

const Read = React.forwardRef((props, ref)=>{
  const isDesktop = useMediaQuery({query: '(min-width: 800px)'})

  if(!isDesktop){
    return(<Highlight secondary onClick={props.handler} ref={ref}>
      {props.more ? props.expanded ? null : 'Read more!' : 'Read less...'}
      </Highlight>)
  } else {
    return null;
  }
});

export default Read;