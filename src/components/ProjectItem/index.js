import React, {useEffect, useRef} from 'react'
import Img from 'gatsby-image'
import gsap, {Expo} from 'gsap'

import { ProjectContainer, ProjectTitle, ProjectImage, ProjectInformation, ProjectDetail, ProjectDetailCaption, ProjectDetailContent, ProjectDescription } from './styles'
import ActionButton from '../shared/ActionButton'
import {useObserver} from '../shared/utils'

const ProjectItem = (props) => {

  const target = useRef(null)
  const onIntersect = (entry) => {
    if(entry.isIntersecting){
      gsap.to(target.current, {
        opacity: 1,
        duration: 1,
        ease: Expo.easeInOut
      })
    }
  }

  const [hasIntersected] = useObserver({target, onIntersect, triggerOnce: false, threshold: 0.3, triggerOnce: true})

  useEffect(() => {
    console.log('Has intersected: ', hasIntersected)
  }, [hasIntersected])

  return (
    <ProjectContainer ref={target} left={props.left}>
      <ProjectTitle left={props.left}><h1>{props.name}</h1></ProjectTitle>
      <ProjectImage>
        <Img fluid={props.image}/>
      </ProjectImage>
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
