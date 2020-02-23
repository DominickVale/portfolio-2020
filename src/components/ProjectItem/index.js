import React from 'react'
import { ProjectContainer, ProjectTitle, ProjectImage, ProjectDetail, ProjectDetailCaption, ProjectDetailContent, ProjectDescription } from './styles'


const index = (props) => {
  return (
    <ProjectContainer>
      <ProjectTitle>{props.name}</ProjectTitle>
      <ProjectImage>{props.image}</ProjectImage>
        <ProjectDetail>
          <ProjectDetailCaption>date:</ProjectDetailCaption>
          <ProjectDetailContent bold>{props.date}</ProjectDetailContent>
        </ProjectDetail>
        <ProjectDetail>
          <ProjectDetailCaption>tech:</ProjectDetailCaption>
          <ProjectDetailContent bold>{props.tags}</ProjectDetailContent>
        </ProjectDetail>
        <ProjectDescription>
          <ProjectDetailCaption float="left">notes:</ProjectDetailCaption>
          <ProjectDetailContent>{props.description}</ProjectDetailContent>
        </ProjectDescription>
    </ProjectContainer>
  )
}

export default index
