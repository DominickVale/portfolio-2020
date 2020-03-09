import React from 'react'

import { Highlight } from '../shared/styles'
import {useIsDesktop} from '../shared/utils'

const Read = React.forwardRef((props, ref)=>{

  const isDesktop = useIsDesktop()
  
  if(!isDesktop){
    return(<Highlight secondary onClick={props.handler} ref={ref}>
      {props.more ? props.expanded ? null : 'Read more!' : 'Read less...'}
      </Highlight>)
  } else {
    return null;
  }
});

export default Read;