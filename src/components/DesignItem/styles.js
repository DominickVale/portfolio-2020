import styled, {css} from 'styled-components'
import constants from '../../constants'
import Img from 'gatsby-image'

const isIE = /*@cc_on!@*/false || !!document.documentMode;

export const DesignTitle = styled.article`
display: none;
position: relative;
cursor: pointer;
margin: 33vh 0;
h1{
  font-family: "HK Grotesk Bold";
  font-size: 7vw;
  mix-blend-mode: exclusion;
  color: ${isIE ? constants.headingColor : 'transparent'};
  text-transform: uppercase;
  text-align: right;
  -webkit-text-stroke: 1px ${constants.headingColor};
  opacity: 0.6
}
&:hover{
  h1{
    opacity: 1;
  }
}
@media only screen and (min-width: 720px){
  display: block;
}
${props => props.left && css`
h1{
  text-align: left;
}`
}
`

export const BackgroundHoverImage = styled.span`
pointer-events: none;
opacity: 0;
position: absolute !important;
left: 0;
top: 0;
transition: transform 1.5s ease-out, opacity 1.5s ease-out;
.gatsby-image-wrapper{
  height: 70vh;
  width: 50vw;
  img{
    object-fit: contain !important;
  }
}
`


export const DesignsContainer = styled.section`
display: flex;
flex-wrap: wrap;
align-content: flex-start;
justify-content: space-between;
@media only screen and (min-width: 720px){
  display: block;
}
`


export const DesignWrapper = styled.section`
position: relative;
width: 10rem;
height: 10rem;
max-width: 100%;
margin: 1.5vh auto;
cursor: pointer;
`

export const DesignCaption = styled.h2`
position: absolute;
font-family: "HK Grotesk Bold";
font-size: 100%;
top: 33%;
left: 0;
text-transform: uppercase;
z-index: 5;
text-align: center;
`

export const DesignImage = styled(Img)`
position: relative;
width: 10rem;
min-width: 10rem;
height: 10rem;
min-height: 10rem;
&::after{
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgba(6,0,0,0.6);
  top: 0;
  left: 0;
}
img {
  object-fit: cover !important;
  filter: grayscale(100%);
  &:hover{
    filter: none;
  }
}
`