import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'
import { ParallaxProvider, Parallax } from "react-skrollr";
import {useMediaQuery} from 'react-responsive'

import Layout from "../components/layout"
import About from "../components/About"
import ProjectItem from '../components/ProjectItem'
import DesignItem from '../components/DesignItem'
import SectionHeadline from '../components/SectionHeadline'
import {ProjectsContainer} from '../components/ProjectItem/styles'
import {DesignsContainer} from '../components/DesignItem/styles'

import {PROJECTS, DESIGNS} from '../data'
import rose from '../../public/images/rose.jpg'




const IndexPage = () => {
  
  const isDesktop = useMediaQuery({query: '(min-width: 800px)'})

  const data = useStaticQuery(graphql`
  fragment fluidBG on File {
    childImageSharp {
      fluid(quality: 100, maxHeight: 720) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query {
    
    rose: file(relativePath: { eq: "rose.jpg" }){
      ...fluidBG
    }
    ambientify: file(relativePath: { eq: "ambientify.jpg" }){
      ...fluidBG
    }
    photographer_e_commerce: file(relativePath: { eq: "photographer_e_commerce.jpg" }){
      ...fluidBG
    }
  }
  `)

  const roseParallaxData = {
    "data-anchor-target" : "#designs",
    "data-bottom-top" : `
        position: fixed;
        opacity: 0;
        left: -45%;
        bottom: -50%;
        mix-blend-mode: ${isDesktop ? 'color-dodge' : 'lighten'};
        max-width: 50vw;
        max-height: 50vh;`,
    "data--400-top-bottom" : `
        position: fixed;
        opacity: 1;
        left: -35%;
        ${isDesktop ? 'bottom: 35%;max-width: 100vw;max-height: 100vh;' : 'bottom: 50%;max-width: 300vw;max-height: 300vh;' }
`,
  }

  const Rose = styled.img`
  height: 100%;
  width: 100%;
  mix-blend-mode: ${isDesktop ? 'color-dodge' : 'lighten'};
  user-select: none;
  pointer-events: none;
  `

  const RoseContainer = styled(ParallaxProvider)`
  mix-blend-mode: ${isDesktop ? 'color-dodge' : 'lighten'};
  z-index: 0 !important;
  `

  return(
  <Layout id="about">
    <About/>

    <SectionHeadline>&lt;PROJECTS/&gt;</SectionHeadline>
    <ProjectsContainer id="projects">
    {PROJECTS.map((project, i) => (<ProjectItem {...project} index={i} image={data[project.image].childImageSharp.fluid} key={project.name} left={1 & i}/>))}
    </ProjectsContainer>

    <SectionHeadline right>&lt;DESIGNS/&gt;</SectionHeadline>
    <DesignsContainer id="designs">
    {DESIGNS.map((design, i) => (<DesignItem {...design} image={data[design.image].childImageSharp.fluid} key={design.name} left={1 & i}/>))}
    </DesignsContainer>

    <SectionHeadline contacts>&lt;CONTACTS/&gt;</SectionHeadline>
    <RoseContainer
      init={{
        smoothScrollingDuration: 200,
        smoothScrolling: true,
        forceHeight: true
      }}>
      <Parallax data={roseParallaxData}>
        <Rose src={rose} />
      </Parallax>
    </RoseContainer>
  </Layout>
)}

export default IndexPage
