import styled from 'styled-components';
import Img from 'gatsby-image'

import constants from '../../constants';

import {Highlight} from '../shared/styles'

export const ProjectContainer = styled.article`
display: flex;
flex-direction: column;
margin-bottom: 20vh;
`

export const ProjectTitle = styled.h1`
color: ${constants.headingColor};
font-size: ${constants.projectTitleSize};
text-align: center;
font-family: "HK Grotesk Bold";
`

export const ProjectImage = styled(Img)`
max-height: 60vh !important;
margin-bottom: 4vh;
img{
  object-fit: contain !important;
}
`

export const ProjectInformation = styled.div`
display: flex;
flex-direction: column;

`
export const ProjectDetail = styled.span`
display: flex;
flex-direction: row;
justify-content: start;
margin-top: 1rem;
`

export const ProjectDetailCaption = styled(Highlight)`
font-size: 0.8rem;
font-family: "Space Mono";
margin-right: 2rem;
float: ${props => props.float ? props.float : 'none'};
margin-bottom: 1rem;
margin-top: 0.1rem;
max-width: 2rem;
`

export const ProjectDetailContent = styled.span`
font-family: ${props => props.bold ? "HK Grotesk Bold" : "HK Grotesk Regular"};
font-size: 1rem;
color: ${constants.projectDescriptionColor};
`

export const ProjectDescription = styled.div`
margin-top: 1rem;
display: block;
font-family: "HK Grotesk Regular";
color: ${constants.projectDescriptionColor};

`