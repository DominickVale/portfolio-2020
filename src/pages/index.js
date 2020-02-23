import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import About from "../components/About"
import ProjectItem from '../components/ProjectItem'
import {SectionHeadline} from "../components/shared/styles"

const PROJECTS = [
  {
    name: "Ambientify",
    image: "image",
    description: "Vulputate sit viverra tellus viverra vivamus. Lectus vitae, in vitae vulputate tellus arcu imperdiet. Enim amet curabitur eu elit id massa odio mattis.Vulputate sit viverra tellus viverra vivamus. Lectus vitae, in vitae vulputate tellus arcu imperdiet. Aliquam blandit porta suspendisse nunc, sit orci.",
    tags: "#ReactNative #StyledComponents #Redux #node.js #expo-unimodules #google-iap",
    date: "10/01/2020"
  },
  {
    name: "Photographer E-commerce",
    image: "image",
    description: "Vulputate sit viverra tellus viverra vivamus. Lectus vitae, in vitae vulputate tellus arcu imperdiet. Enim amet curabitur eu elit id massa odio mattis.Vulputate sit viverra tellus viverra vivamus. Lectus vitae, in vitae vulputate tellus arcu imperdiet. Aliquam blandit porta suspendisse nunc, sit orci.",
    tags: "#ReactNative #StyledComponents #Redux #node.js #expo-unimodules #google-iap",
    date: "10/01/2020"
  },
]

const IndexPage = () => (
  <Layout>
    <About/>
    <SectionHeadline>&lt;PROJECTS/&gt;</SectionHeadline>
    {PROJECTS.map(project => (<ProjectItem {...project} key={project.name}/>))}
  </Layout>
)

export default IndexPage
