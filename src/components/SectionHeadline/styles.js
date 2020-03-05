import styled from 'styled-components'
import constants from '../../constants'
import { MobileBorder } from '../shared/styles'


export const StyledSectionHeadline = styled.h2`
position: relative;
user-select: none;
margin-top: 25vh;
margin-bottom: ${props => props.contacts ? '24vh' : '10vh'};
h1{
  margin: 0;
  font-family: "HK Grotesk Bold";
  font-size: 12vw;
  color: transparent;
  -webkit-text-stroke: 1px ${constants.sectionHeadlineColor};
}
@media only screen and (min-width: 800px){
h1{
  font-size: calc(4rem + 2.6vw);
}
}
@media only screen and (min-width: 1440px){
h1{
  font-size: calc(6rem + 3vw);
}
}
${MobileBorder}
`