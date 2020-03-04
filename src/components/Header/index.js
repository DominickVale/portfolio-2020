import React, {useState, useRef, useEffect} from 'react'
import {TimelineMax} from 'gsap'
import {StyledHeader, Nav, HamButton, ProgressBar, ProgressBarContainer} from './styles'
import {animateRight, blinkIn, staggerBlinkIn, fadeInT} from '../shared/animations'
import Link from './Link'
import Menu from '../Menu'


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const progressRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
     const tl = new TimelineMax()

     blinkIn(progressRef.current)
     tl.add(animateRight(progressRef.current))
       .add(staggerBlinkIn(linksRef.current), '-=0.9')
    return () => {
      
    };
  }, [])


  return (
    <StyledHeader>
      <ProgressBarContainer ref={progressRef}>
        <ProgressBar/>
      </ProgressBarContainer>
      {menuOpen && (<Menu onClose={() => setMenuOpen(false)}/>)}
      <Nav>
        <HamButton onClick={() => setMenuOpen(true)}>
          <svg width="22" height="8" viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M0 8H22V5.81818H0V8ZM0 2.18182H22V0H0V2.18182Z" fill="#FAF3F3"/>
          </svg>
        </HamButton>
        <Link ref={el => {linksRef.current[0] = el}} href="#about">about</Link>
        <Link ref={el => {linksRef.current[1] = el}} href="#projects">projects</Link>
        <Link ref={el => {linksRef.current[2] = el}} href="#designs">designs</Link>
        <Link ref={el => {linksRef.current[3] = el}} href="#contacts">contacts</Link>
      </Nav>
    </StyledHeader>
  )
}

export default Header
