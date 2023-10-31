import React from 'react'
import './project.css'

const Project = ({image, text, description}) => {
  return (
    <div className="portfolio__project-container__project">
    <div className="portfolio__project-container__project-image">
      <img src={image} alt="Project" />
    </div>
    <div className="portfolio__project-container__project-text">
      <h3>{text}</h3>
      <p>{description}</p>
    </div>
  </div>
  )
}

export default Project