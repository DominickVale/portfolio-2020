import React, {useEffect, useRef} from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import gsap, {TimelineMax, Linear} from 'gsap'

import Layout from "../components/layout"
import About from "../components/About"
import ProjectItem from '../components/ProjectItem'
import DesignItem from '../components/DesignItem'
import SectionHeadline from '../components/SectionHeadline'
import Rose from '../components/Footer/Rose'
import ParallaxAnimation from '../components/ParallaxAnimation'
import {ProjectsContainer} from '../components/ProjectItem/styles'
import {DesignsContainer} from '../components/DesignItem/styles'
import {useIsDesktop} from '../components/shared/utils'

import {PROJECTS, DESIGNS} from '../data'
import favicon from '../../public/images/favicon.ico'
import preview from '../../public/images/preview.jpg'


const IndexPage = () => {

  const isDesktop = useIsDesktop()
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
    america_sportclub: file(relativePath: { eq: "america_sportclub.jpg" }){
      ...fluidBG
    }
  }
  `)

  const roseRef = useRef(null)
  const triggerRef = useRef(null)
  const roseAnimRef = useRef(null)

  useEffect(() => {
    roseAnimRef.current = new TimelineMax({paused: true}).from(roseRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      left: '-40%',
      bottom: '-40%',
      ease: Linear.easeNone
    })
  }, [])

  return(
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="I’m a 21 years old Front-end Web Developer from Italy. I’m currently looking for a job as JavaScript Front-end Developer." />
      <title>Domenico Vale - Web developer & designer</title>
      <meta property="og:title" content="Domenico Vale - Web developer & designer" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dominick-portfolio-2020-test.netlify.com/" />
      <meta property="og:image" content={preview} />
      <link rel="icon" href={favicon}/>
      <link rel="canonical" href="https://dominick-portfolio-2020-test.netlify.com/" />
    </Helmet>
    <Layout id="about">
      <About/>

      <SectionHeadline>&lt;PROJECTS/&gt;</SectionHeadline>
      <ProjectsContainer id="projects">
      {PROJECTS.map((project, i) => (<ProjectItem {...project} index={i} image={data[project.image].childImageSharp.fluid} key={project.name} left={1 & i}/>))}
      </ProjectsContainer>

      <SectionHeadline toLeft>&lt;DESIGNS/&gt;</SectionHeadline>
      <DesignsContainer id="designs">
      {DESIGNS.map((design, i) => (<DesignItem {...design} image={data[design.image].childImageSharp.fluid} key={design.name} left={1 & i}/>))}
      </DesignsContainer>
      <ParallaxAnimation
        animation={roseAnimRef}
        element={triggerRef}
        startOffset={-400}
        endOffset={50}>
          <Rose ref={roseRef} />
        <SectionHeadline contacts ref={triggerRef}>&lt;CONTACTS/&gt;</SectionHeadline>
      </ParallaxAnimation>
    </Layout>
  </>
)}

export default IndexPage
