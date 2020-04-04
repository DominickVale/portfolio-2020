import {keyframes} from 'styled-components'
import gsap, {TimelineMax, TweenMax, Expo, Linear, CSSPlugin} from 'gsap'



export const animateRight = (target) =>
  TweenMax.to(target, {
    width: '100%',
    duration: 2,
    ease: Expo.easeInOut,
  })




export const fadeInT = (target, duration, delay) => 
  TweenMax.from(target, {
    opacity: 0,
    duration: duration || 1,
    ease: Expo.easeIn,
    delay: delay || 0
  })


export const blinkIn = (target, delay, times) =>
  TweenMax.from(target, {
    opacity: 0,
    repeat: times || 12,
    duration: .08,
    ease: Linear,
    delay: delay || 0
  });


export const openMenu = (target) => {
  TweenMax.to(target, {
    top: '0vh',
    duration: 2,
    ease: Expo.easeInOut
  })
}


export const staggerBlinkIn = (targets, delay, duration) =>
  TweenMax.from(targets, {
    opacity: 0,
    duration: 0.08,
    ease: Linear,
    stagger: {
      repeat: 10,
      each: 0.1,
    }
  })











export const navLinkBlink = keyframes`
from{
  opacity: 0;
}

10%{
  opacity: 1;
}

20%{
  opacity: 0;
}

30%{
  opacity: 1;
}

40%{
  opacity: 0;
}

50%{
  opacity: 1;
}

60%{
  opacity: 0;
}

70%{
  opacity: 1;
}

80%{
  opacity: 0;
}

to{
  opacity: 1;
}
`

export const slowBlink = keyframes`
from{
  opacity: 0.4;
}

50%{
  opacity: 0.6;
}

to{
  opacity: 0.4;
}
`

export const actionBgGlitch = keyframes`
0%{
  transform: translate(10%, 10%) scale(0.8, 0.2);
}

30%{
  transform: translate(-15%, -5%) scale(1);
}

60%{
  transform: translate(15%, 20%) scale(0.6, 0.2);
}

100%{
  transform: translate(0px, 0px) scale(1);
}
`

export const fadeIn = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}`


export const noiseAnimation = keyframes`
0% {
	transform: translate(-5%, 10%)
}
20% {
  transform: translate(20%, 0%)
}
40% {
  transform: translate(-8%, -2%)
}
60% {
  transform: translate(0%, 0%)
}
80% {
  transform: translate(20%, 10%)
}
100% {
  transform: translate(-20%, -10%)
}
`