import styled from 'styled-components'
import constants from '../../constants'

export const Button = styled.button`
padding: 0;
background: none;
border: none;
cursor: pointer;
`

export const Highlight = styled.span`
color: ${constants.highlightColor};
`

export const SectionHeadline = styled.h2`
margin-top: 20vh;
font-family: "HK Grotesk Bold";
font-size: 12vw;
opacity: 0.2;
color: transparent;
-webkit-text-stroke: 1px ${constants.backgroundObjectsColor};
`
