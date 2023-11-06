import React from 'react'
import './projects.css'
import { Project } from '../../components';

import projectsData from '../../modules/projectsData';



const Projects = () => {
  return (
    <div className='portfolio__projects section__margin' id='projects'>
      <div className='portfolio__projects-header'>
        <h2 className='gradient__text'>Projects</h2>
      </div>
      <div className='portfolio__projects-container'>
      {projectsData.map((proj) => (
          <a key={proj.id} href={proj.link} target='_blank' rel="noreferrer">
            <Project image={proj.image} text={proj.text} description={proj.description} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Projects