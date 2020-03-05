import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import About from "../components/About"
import ProjectItem from '../components/ProjectItem'
import DesignItem from '../components/DesignItem'
import SectionHeadline from '../components/SectionHeadline'
import {ProjectsContainer} from '../components/ProjectItem/styles'
import {DesignsContainer} from '../components/DesignItem/styles'

import {PROJECTS, DESIGNS} from '../data'

const IndexPage = () => {
  
  const data = useStaticQuery(graphql`
  fragment fluidBG on File {
    childImageSharp {
      fluid(quality: 100, maxHeight: 720) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  query HeroBG {
    ambientify: file(relativePath: { eq: "ambientify.jpg" }){
      ...fluidBG
    }
    photographer_e_commerce: file(relativePath: { eq: "photographer_e_commerce.jpg" }){
      ...fluidBG
    }
  }
  `)

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
  </Layout>
)}

export default IndexPage
