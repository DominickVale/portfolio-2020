import React from 'react'

import {FooterContainer, ContactInfo, Captions, Content, DevelopedBy} from './styles'
import {Highlight} from '../shared/styles'

import Icons from './Icons'

const Footer = () => {
  return (
    <FooterContainer>
      <ContactInfo>
        <Captions>
          <Highlight>phone:</Highlight>
          <Highlight>email:</Highlight>
          <Highlight>address:</Highlight>
        </Captions>
        <Content>
          <p>+39 555-555-555</p>
          <p><a href="mailto: dominickveil@gmail.com">dominickveil@gmail.com</a></p>
          <p>742 Evergreen Terrace, IT</p>
        </Content>
      </ContactInfo>
      <Icons />
      <DevelopedBy><p>developed & designed by <Highlight>Dominick</Highlight>.</p></DevelopedBy>
    </FooterContainer>
  )
}

export default Footer
