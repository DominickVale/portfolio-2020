import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import About from "../components/About"
import ProjectItem from '../components/ProjectItem'
import DesignItem from '../components/DesignItem'
import SectionHeadline from '../components/SectionHeadline'
import Rose from '../components/Footer/Rose'
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

  return(
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="I’m a 21 years old Front-end Web Developer from Italy. I’m currently looking for a job as JavaScript Front-end Developer." />
      <title>Domenico Vale - Web developer & designer</title>
      <link rel="canonical" href="https://dominick-portfolio-2020-test.netlify.com/" />
    </Helmet>
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
      <Rose />
      <SectionHeadline contacts>&lt;CONTACTS/&gt;</SectionHeadline>
    </Layout>
  </>
)}

export default IndexPage
