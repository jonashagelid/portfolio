import React from 'react'
import './tools.css';
import { Skill } from '../../components';
import toolsData from '../../modules/toolsData.js';



const Tools = () => {
  return (
    <div className='portfolio__tools section__margin' id='tools'>
      <div className='portfolio__tools-header'>
        <h2 className='gradient__text'>Tools</h2>
      </div>
      <div className='portfolio__tools-container'>
      {toolsData.map((tool, index) => (
          <Skill key={index} image={tool.image} text={tool.text} />
        ))}
      </div>
    </div>
  )
}

export default Tools