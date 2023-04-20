import React from 'react'
import './skills.css';
import { Skill } from '../../components';
import JS from '../../assets/javascript.png'

const WhatGTP3 = () => {
  return (
    <div className='portfolio__skills section__margin' id='skl'>
      <div className='portfolio__skills-container'>
        <Skill image={JS} text='Lorem ipsum'/>
        <Skill image={JS} text='Lorem ipsum'/>
        <Skill image={JS} text='Lorem ipsum'/>
        <Skill image={JS} text='Lorem ipsum'/>
        <Skill image={JS} text='Lorem ipsum'/>
        <Skill image={JS} text='Lorem ipsum'/>
        <Skill image={JS} text='Lorem ipsum'/>
        <Skill image={JS} text='Lorem ipsum'/>
      </div>
    </div>
  )
}

export default WhatGTP3