import React from 'react'
import './skill.css'

const Skill = ({image, text}) => {
  return (
    <div className="portfolio__skill-container__skill">
      <div className="portfolio__skill-container__skill-image">
        <img src={image} alt="Skill" />
      </div>
      <div className="portfolio__skill-container__skill-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Skill