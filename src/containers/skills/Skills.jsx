import React from 'react'
import './skills.css';
import { Skill } from '../../components';
import skillsData from '../../modules/skillsData';


const Skills = () => {
  return (
    <div className='portfolio__skills section__margin' id='skills'>
      <div className='portfolio__skills-header'>
        <h2 className='gradient__text'>Technologies</h2>
      </div>
      <div className='portfolio__skills-container'>
      {skillsData.map((skill, index) => (
          <Skill key={index} image={skill.image} text={skill.text} />
        ))}
      </div>
    </div>
  )
}

export default Skills