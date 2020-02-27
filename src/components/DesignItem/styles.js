import styled, {css} from 'styled-components'
import constants from '../../constants'
import Img from 'gatsby-image'


export const DesignTitle = styled.h1`
display: none;
font-family: "HK Grotesk Bold";
font-size: 10vw;
-webkit-text-stroke: 1px ${constants.headingColor};
color: transparent;
text-transform: uppercase;
text-align: right;
margin-top: 33vh;
@media only screen and (min-width: 720px){
  display: block;
}
${props => props.left && css`
text-align: left;
`}
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