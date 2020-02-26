import React, {useEffect} from 'react'
import { ProjectContainer, ProjectTitle, ProjectImage, ProjectInformation, ProjectDetail, ProjectDetailCaption, ProjectDetailContent, ProjectDescription } from './styles'
import ActionButton from '../shared/ActionButton'
import {Break} from '../shared/styles'

const ProjectItem = (props) => {

  useEffect(() => {
    console.log(props.image)
  }, [])

  return (
    <ProjectContainer left={props.left}>
      <ProjectTitle left={props.left}>{props.name}</ProjectTitle>
      <ProjectImage fluid={props.image}/>
      <ProjectInformation left={props.left}>
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
      </ProjectInformation>
      <ActionButton left={props.left}>VISIT WEBSITE</ActionButton>
      <Break />
    </ProjectContainer>
  )
}

export default ProjectItem
