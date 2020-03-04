import React from 'react'

import {FooterContainer, StyledArrow, ContactInfo, Captions, Content, QuoteSection, DevelopedBy} from './styles'
import {Highlight} from '../shared/styles'

import Icons from './Icons'

const Footer = () => {
  return (
    <FooterContainer id="contacts" >
      <StyledArrow href="#about">
        <p>Back to top</p>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.6" d="M44.25 76.0625V0.5H55.75V76.0625V77.2681L56.6032 76.4164L91.1872 41.8943L99.2929 50L50 99.2929L0.707107 50L8.87468 41.8324L43.3961 76.4157L44.25 77.2711V76.0625Z" stroke="#F3E7E7"/>
        </svg>
      </StyledArrow>
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
      <QuoteSection>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae consequat non diam sed cursus. Eget aliquam egestas faucibus enim at. A nec, malesuada aliquam...</QuoteSection>
      <Icons />
      <DevelopedBy><p>developed & designed by <a href="https://www.facebook.com/dominickveil" target="_blank" rel="noopener noreferrer"><Highlight>Yours truly</Highlight></a>.</p></DevelopedBy>
    </FooterContainer>
  )
}

export default Footer
