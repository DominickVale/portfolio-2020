import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import About from "../components/About"
import ProjectItem from '../components/ProjectItem'
import DesignItem from '../components/DesignItem'
import {DesignsContainer} from '../components/DesignItem/styles'
import {SectionHeadline} from "../components/shared/styles"

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
  <Layout>
    <About/>
    <SectionHeadline>&lt;PROJECTS/&gt;</SectionHeadline>
    {PROJECTS.map((project, i) => (<ProjectItem {...project} image={data[project.image].childImageSharp.fluid} key={project.name} left={1 & i}/>))}
    <SectionHeadline>&lt;DESIGNS/&gt;</SectionHeadline>
    <DesignsContainer>
     {DESIGNS.map((design, i) => (<DesignItem {...design} image={data[design.image].childImageSharp.fluid} key={design.name} left={1 & i}/>))}
    </DesignsContainer>

    <SectionHeadline>&lt;CONTACTS/&gt;</SectionHeadline>
  </Layout>
)}

export default IndexPage
