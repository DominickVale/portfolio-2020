import styled from 'styled-components'
import constants from '../../constants'
import { MobileBorder } from '../shared/styles'

const isIE =  typeof window !== "undefined" && (/*@cc_on!@*/false || !!document.documentMode);


export const StyledSectionHeadline = styled.div`
border: none !important;
position: relative;
user-select: none;
margin-bottom: ${props => props.contacts ? '24vh' : '10vh'};
transform: translateX(0);
h1{
  margin: 0;
  margin-top: 25vh !important;
  font-family: "HK Grotesk Bold";
  font-size: 12vw;
  margin-left: ${props => props.toLeft ? '0' : '36vw'};
  color: ${isIE ? constants.headingColor : 'transparent'};
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