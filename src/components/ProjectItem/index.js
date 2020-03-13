import React, {useRef} from 'react'
import Img from 'gatsby-image'
import gsap, {TimelineMax, Expo, Elastic} from 'gsap/all'

import { ProjectContainer, ProjectTitle, ProjectImage, ProjectInformation, ProjectDetail, ProjectDetailCaption, ProjectDetailContent, ProjectDescription } from './styles'
import ActionButton from '../shared/ActionButton'
import {useObserver, useIsDesktop} from '../shared/utils'
import { blinkIn } from '../shared/animations'

const ProjectItem = (props) => {

  const container = useRef(null)
  const title = useRef(null)
  const titleObject = useRef(null)
  const titleBorder = useRef(null)
  const imageBorder = useRef(null)
  const information = useRef(null)
  const imageContainer = useRef(null)
  const image = useRef(null)
  const button = useRef(null)

  const isDesktop = useIsDesktop();

  
  const onIntersect = (entry) => {
    if(entry.isIntersecting){
      const tl = new TimelineMax();
      
      tl.set(titleObject.current, {visibility: 'visible'});
      tl.set(titleBorder.current, {visibility: 'visible'});
      tl.set(imageContainer.current, {visibility: 'visible'});

      // I don't really like scrolljacking, so, commented out. Might change.
      //if(isDesktop) information.current.scrollIntoView({behavior: "smooth", block: "center"}) 

      
      tl.from(titleBorder.current, {
        transform: 'scaleY(0)',
        duration: 1.4,
          ease: Elastic.easeInOut.config(1, 0.005)
        })
        .add(blinkIn(titleBorder.current, 0, 20), '-=1.6')
        .add(blinkIn(titleObject.current, 0, 12), '-=0.7')
        .from(imageBorder.current, {
          scale: 0,
          duration: 1,
          ease: Elastic.easeInOut.config(1, 1)
        }, '-=1.25')
        .add(blinkIn(imageBorder.current, 0, 20), '-=0.9')
        .from(image.current, {
          scaleY: 0,
          autoAlpha: 0,
          duration: 1,
          zIndex: 100,
          ease: Elastic.easeInOut.config(1, 1)
        }, '-=0.8')
      }
    }
    
    const [hasIntersected] = useObserver({
      target: isDesktop ? container : imageBorder,
      onIntersect,
      threshold: isDesktop ? 0.8 : 0.2,
      triggerOnce: true
    })

  return (
    <ProjectContainer ref={container} left={props.left}>
      <ProjectTitle left={props.left} ref={title}>
        <div className="titleBorder" ref={titleBorder}/>
        {props.name}
        <div className="titleObject" ref={titleObject}/>
      </ProjectTitle>
      <ProjectImage left={props.left} ref={imageContainer}>
        <div className="imageBorder" ref={imageBorder}/>
        <div ref={image}>
          <Img fluid={props.image}/>
        </div>
      </ProjectImage>
      <ProjectInformation left={props.left} ref={information}>
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
          <ProjectDetailContent dangerouslySetInnerHTML={{__html: props.description}}></ProjectDetailContent>
        </ProjectDescription>
      </ProjectInformation>
      <ActionButton ref={button} left={props.left} href={props.link} target="_blank" rel="noreferrer">VISIT WEBSITE</ActionButton>
    </ProjectContainer>
  )
}

export default ProjectItem
