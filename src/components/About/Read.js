import React from 'react'

import { Highlight } from '../shared/styles'
import {isDesktop} from '../shared/utils'

const Read = React.forwardRef((props, ref)=>{

  if(!isDesktop){
    return(<Highlight secondary onClick={props.handler} ref={ref}>
      {props.more ? props.expanded ? null : 'Read more!' : 'Read less...'}
      </Highlight>)
  } else {
    return null;
  }
});

export default Read;