import React, {useEffect, useRef} from "react"
import Layout from "../components/layout"
import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';


const Tests = () => {
  
  const threeRef = useRef(null)

  const renderer = new THREE.WebGLRenderer()
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
  const composer = new EffectComposer(renderer)
  
  const render = () => {
    requestAnimationFrame(render);
    composer.render()
  }

  const init = () => {
    let renderPass = new RenderPass(scene, camera)
    let grain = new FilmPass( 0.35, 0.5, 2048, false)

    renderer.setSize( window.innerWidth, window.innerHeight )
    renderer.setPixelRatio( window.devicePixelRatio )
    composer.addPass(renderPass)
    composer.addPass(grain)
  }
  useEffect(() => {

    init()
    threeRef.current.appendChild(renderer.domElement)
    render();
  }, [])
  




  return (
  <Layout>
    <div ref={threeRef}></div>
  </Layout>
)}

export default Tests
