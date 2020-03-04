import React, {useRef, useState} from 'react'
import gsap from 'gsap'
import { DesignTitle, DesignWrapper, DesignImage, DesignCaption, BackgroundHoverImage } from './styles'
import {useMediaQuery} from 'react-responsive';
import Img from 'gatsby-image'
import { blinkIn } from '../shared/animations';

const DesignItem = (props) => {
  
  const isDesktop = useMediaQuery({query: '(min-width: 720px)'})
  const [canHover, setCanHover] = useState(true)
  const hoverImageRef = useRef(null);
  const designTitleRef = useRef(null)

  const hoverHandler = (evt) => {
    const vx = evt.clientX;
    const vy = evt.clientY;

    const el = evt.target.getBoundingClientRect()
    const img = hoverImageRef.current.getBoundingClientRect()

    const ex = el.left;
    const ey = el.top;

    const localX = vx - ex;
    const localY = vy - ey;


    requestAnimationFrame(() => {
      hoverImageRef.current.style.transform = `translate(${localX - (img.width / 2)}px, ${localY - (img.height / 2)}px)`
    })
  }

  const mouseEnterHandler = () => {
    if(canHover) {
      blinkIn(designTitleRef.current)
      setCanHover(false)
      setTimeout(() => {
        setCanHover(true)
      }, 5000);
    }
    hoverImageRef.current.style.opacity = 1
  }

  const mouseLeaveHandler = () => {
    hoverImageRef.current.style.opacity = 0
  }

  if (isDesktop) return (
    <DesignTitle left={props.left} onMouseMove={hoverHandler} ref={designTitleRef} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <BackgroundHoverImage ref={hoverImageRef}>
        <Img fluid={props.image}/>
      </BackgroundHoverImage>
      <h1>{props.name}</h1>
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
