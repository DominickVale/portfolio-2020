import React from 'react'

import {MenuWrapper, MenuContainer, MenuItem, CloseButton, CloseButtonWrapper} from './styles'

const Menu = (props) => {
  return (
    <MenuWrapper>
      <MenuContainer>
        <CloseButtonWrapper>
          <CloseButton onClick={props.onClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.4" d="M16 1.61714L14.3829 0L8 6.38286L1.61714 0L0 1.61714L6.38286 8L0 14.3829L1.61714 16L8 9.61714L14.3829 16L16 14.3829L9.61714 8L16 1.61714Z" fill="#F3E7E7"/>
            </svg>
          </CloseButton>
        </CloseButtonWrapper>
        <MenuItem href="#about" active>ABOUT</MenuItem>
        <MenuItem href="#projects" >PROJECTS</MenuItem>
        <MenuItem href="#designs" >DESIGNS</MenuItem>
        <MenuItem href="#contacts" >CONTACTS</MenuItem>
      </MenuContainer>
    </MenuWrapper>
  )
}

export default Menu
