import styled from 'styled-components'
import constants from '../../constants'

export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-content: center;
`

export const IconsContainer = styled.section`
display: flex;
justify-content: space-between;
`

export const ContactInfo = styled.div`
display: flex;
justify-content: space-between;
max-width: 30rem;
margin: 5vh auto 10vh auto;
`

export const Captions = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items: flex-end;
font-family: "Space Mono";
font-size: 0.8rem;
span{
  margin: 0.66rem 0;
}
`

export const Content = styled(Captions)`
justify-content: flex-start;
align-items: flex-start;
margin-left: 1rem;
color: ${constants.navLinkColor};
font-family: "HK Grotesk Bold";
font-size: 1rem;
p{
  margin: 0;
  margin: 0.6rem 0;
}
`

export const DevelopedBy = styled.div`
font-family: "Space Mono";
font-size: 0.8rem;
text-align: center;
width: 100%;
color:  ${constants.descriptionColor};
opacity: 0.8;
margin: 0;
margin-top: 5vh;
p{
  margin: 0;
}
`