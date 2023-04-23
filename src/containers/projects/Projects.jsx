import React from 'react'
import './projects.css'
import { Project } from '../../components';

import Sample from '../../assets/sampleimg.png'


const Projects = () => {
  return (
    <div className='portfolio__projects section__margin' id='project'>
      <div className='portfolio__projects-header'>
        <h2 className='gradient__text'>Technologies</h2>
      </div>
      <div className='portfolio__projects-container'>
        <Project image={Sample} text='JavaScript' description='Lorem ipsum dolor sit amet.'/>
        <Project image={Sample} text='Kotlin' description='Lorem ipsum dolor sit amet.'/>
        <Project image={Sample} text='CSS' description='Lorem ipsum dolor sit amet.'/>
        <Project image={Sample} text='HTML' description='Lorem ipsum dolor sit amet.'/>
      </div>
    </div>
  )
}

export default Projects