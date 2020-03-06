import React, {useEffect,  useRef} from 'react'
import {TimelineMax} from 'gsap'
import {MenuWrapper, MenuContainer, MenuItem, CloseButton, CloseButtonWrapper} from './styles'
import {openMenu, staggerBlinkIn, blinkIn} from '../shared/animations'


const Menu = (props) => {

  const menuRef = useRef(null)
  const linksRef = useRef([])
  const tl = new TimelineMax()

  useEffect(() => {
    tl.add(openMenu(menuRef.current))
      .add(blinkIn(menuRef.current), '+=0.5')
      .add(staggerBlinkIn(linksRef.current))
  }, [])

  const closeHandler = () => {
    tl.reverse(1).then(props.onClose)
  }


  return (
    <MenuWrapper ref={menuRef}>
      <MenuContainer>
        <CloseButtonWrapper>
          <CloseButton onClick={closeHandler}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M16 1.61714L14.3829 0L8 6.38286L1.61714 0L0 1.61714L6.38286 8L0 14.3829L1.61714 16L8 9.61714L14.3829 16L16 14.3829L9.61714 8L16 1.61714Z" fill="#F3E7E7"/>
            </svg>
          </CloseButton>
        </CloseButtonWrapper>
        <MenuItem ref={el => {linksRef.current[0] = el}} href="#about">ABOUT</MenuItem>
        <MenuItem ref={el => {linksRef.current[1] = el}} href="#projects" active>PROJECTS</MenuItem>
        <MenuItem ref={el => {linksRef.current[2] = el}} href="#designs" >DESIGNS</MenuItem>
        <MenuItem ref={el => {linksRef.current[3] = el}} href="#contacts" >CONTACTS</MenuItem>
      </MenuContainer>
    </MenuWrapper>
  )
}

export default Menu
