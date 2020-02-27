import React from 'react'
import { DesignTitle, DesignWrapper, DesignImage, DesignCaption } from './styles'
import {useMediaQuery} from 'react-responsive';

const DesignItem = (props) => {
  
  const isDesktop = useMediaQuery({query: '(min-width: 720px)'})

  if (isDesktop) return (
    <DesignTitle left={props.left}>
      {props.name}
    </DesignTitle>
  );
  else return(
    <DesignWrapper>
      <DesignImage fluid={props.image}/>
      <DesignCaption>
        {props.name}
      </DesignCaption>
    </DesignWrapper>
  )
}

export default DesignItem
