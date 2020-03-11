import React, {useEffect, useRef} from 'react'
import Img from 'gatsby-image'
import { ProjectContainer, ProjectHeading, ProjectTitle, ProjectImage, ProjectInformation, ProjectDetail, ProjectDetailCaption, ProjectDetailContent, ProjectDescription } from './styles'
import ActionButton from '../shared/ActionButton'

const ProjectItem = (props) => {

  const titleRef = useRef(null)
  const titleRectRef = useRef(null)

/* 
  const animate = () => {
    const tHeight = titleRef.current.clientHeight
    const tWidth = titleRef.current.clientWidth
    const offsetLeft = 100

    titleRef.current.style.right = (- (tWidth + offsetLeft)) + 'px'
    titleRef.current.style.top = -tHeight + 'px'
  }



  useEffect(() => {
    titleRectRef.current = titleRef.current.getBoundingClientRect()
    animate();
    if(typeof window !== "undefined"){
      window.addEventListener('resize', () => {
        requestAnimationFrame(() => {
          animate();
        })
      })
    }
  }, []) */

  return (
    <ProjectContainer left={props.left}>
      <ProjectImage>
        <Img fluid={props.image}/>
      </ProjectImage>
      <ProjectTitle ref={titleRef} left={props.left}><h1>{props.name}</h1></ProjectTitle>
      <ProjectInformation left={props.left}>
        <ProjectDetail>
          <ProjectDetailCaption>date:</ProjectDetailCaption>
          <ProjectDetailContent>{props.date}</ProjectDetailContent>
        </ProjectDetail>
        <ProjectDetail>
          <ProjectDetailCaption>tech:</ProjectDetailCaption>
          <ProjectDetailContent>{props.tags}</ProjectDetailContent>
        </ProjectDetail>
        <ProjectDescription>
          <ProjectDetailCaption float="left">notes:</ProjectDetailCaption>
          <ProjectDetailContent>{props.description}</ProjectDetailContent>
        </ProjectDescription>
      </ProjectInformation>
      <ActionButton left={props.left} href={props.link} target="_blank" rel="noreferrer">VISIT WEBSITE</ActionButton>
    </ProjectContainer>
  )
}

export default ProjectItem
