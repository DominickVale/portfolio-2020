import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import About from "../components/About"
import ProjectItem from '../components/ProjectItem'
import {SectionHeadline} from "../components/shared/styles"

const PROJECTS = [
  {
    name: "Ambientify",
    image: "ambientify",
    description: "Vulputate sit viverra tellus viverra vivamus. Lectus vitae, in vitae vulputate tellus arcu imperdiet. Enim amet curabitur eu elit id massa odio mattis.Vulputate sit viverra tellus viverra vivamus. Lectus vitae, in vitae vulputate tellus arcu imperdiet. Aliquam blandit porta suspendisse nunc, sit orci.",
    tags: "#ReactNative #StyledComponents #Redux #node.js #expo-unimodules #google-iap",
    date: "10/01/2020"
  },
  {
    name: "Photographer E-commerce",
    image: "photographer_e_commerce",
    description: "Vulputate sit viverra tellus viverra vivamus. Lectus vitae, in vitae vulputate tellus arcu imperdiet. Enim amet curabitur eu elit id massa odio mattis.Vulputate sit viverra tellus viverra vivamus. Lectus vitae, in vitae vulputate tellus arcu imperdiet. Aliquam blandit porta suspendisse nunc, sit orci.",
    tags: "#ReactNative #StyledComponents #Redux #node.js #expo-unimodules #google-iap",
    date: "10/01/2020"
  },
]

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
    {PROJECTS.map(project => (<ProjectItem {...project} image={data[project.image].childImageSharp.fluid} key={project.name}/>))}
    <SectionHeadline>&lt;CONTACTS/&gt;</SectionHeadline>
  </Layout>
)}

export default IndexPage
