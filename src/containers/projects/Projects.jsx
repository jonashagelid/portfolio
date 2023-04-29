import React from 'react'
import './projects.css'
import { Project } from '../../components';

import Fruitapp from '../../assets/iosexam.png'
import Tha from '../../assets/tha.png'
import Retro from '../../assets/retro.png'



const Projects = () => {
  return (
    <div className='portfolio__projects section__margin' id='projects'>
      <div className='portfolio__projects-header'>
        <h2 className='gradient__text'>Projects</h2>
      </div>
      <div className='portfolio__projects-container'>
        <a href="https://thehumanaspect.com/" target='_blank' rel="noreferrer"> 
          <Project image={Tha} text='The Human Aspect' description='Bachelors project for The Human Aspect, a mental health foundation. Written in TypeScript with Next.js, Sass, Nuxt.js.'/>
        </a>
        <a href="https://github.com/jonashagelid/TDS200_h22_1057" target='_blank' rel="noreferrer">
          <Project image={Retro} text='Retro Game Marketplace' description='Exam project for cross platform development. Written with Vue and Ionic and utilizing database from Directus.'/>
        </a>
        <a href="https://github.com/jonashagelid/iosexam" target='_blank' rel="noreferrer">
          <Project image={Fruitapp} text='Nutrition App' description='Exam project from iOS programming. Written using SwiftUi and fetching data using the Fruityvice api.'/>
        </a>
      </div>
    </div>
  )
}

export default Projects