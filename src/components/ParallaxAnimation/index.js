import React, {useEffect, useRef, useState} from 'react'
import ReactDOM from 'react-dom';
import gsap, {Linear} from 'gsap'



const ParallaxAnimation = ({element, animation, startOffset, endOffset, smooth, children}) => {

  const animationIdRef = useRef(null);
  const docSize = useRef(0);


  function normalize(value, min, max) {
    return (value - min) / (max - min);
  }
  function clamp(value, min, max) {
    return value < min ? min : (value > max ? max : value);
  }

  const animate = () => {
    //const rect = ReactDOM.findDOMNode(element.current).getBoundingClientRect();
    let min = element.current.offsetTop + startOffset;
    let max = element.current.offsetTop + element.current.offsetHeight + endOffset;
    let yOffset = window.pageYOffset + window.innerHeight / 2

    const value = clamp(normalize(yOffset, min, max), 0, 1);

    animation.current.totalProgress(value)
    animationIdRef.current = null;

    //console.log(' animation progress: ', animation.current.totalProgress())
  }

  useEffect(() => {
    if(typeof window !== "undefined"){
      if(smooth) element.current.style.transition = 'all 1s ease'
      docSize.current = document.body.clientHeight
      window.addEventListener("scroll", () => {
        if(!animationIdRef.current)
          animationIdRef.current = requestAnimationFrame(animate)
      })
    }
  }, [])

  return(<>{children}</>)
}

export default ParallaxAnimation
