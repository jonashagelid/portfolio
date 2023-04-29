import React from 'react'
import './skills.css';
import { Skill } from '../../components';
import JS from '../../assets/javascript.png'
import Kotlin from '../../assets/kotlin.png'
import Css from '../../assets/css.png'
import Html from '../../assets/html.png'
import Node from '../../assets/node.png'
import react from '../../assets/react.png'
import TS from '../../assets/typescript.png'
import Vue from '../../assets/vue.png'
import Swift from '../../assets/swift.png'
import Ionic from '../../assets/inoic.png'
import Next from'../../assets/nextjs.png'



const Skills = () => {
  return (
    <div className='portfolio__skills section__margin' id='skills'>
      <div className='portfolio__skills-header'>
        <h2 className='gradient__text'>Technologies</h2>
      </div>
      <div className='portfolio__skills-container'>
        <Skill image={JS} text='JavaScript'/>
        <Skill image={Kotlin} text='Kotlin'/>
        <Skill image={Css} text='CSS'/>
        <Skill image={Html} text='HTML'/>
        <Skill image={Node} text='Node.js'/>
        <Skill image={Next} text='Next.js'/>
        <Skill image={react} text='React'/>
        <Skill image={TS} text='TypeScript'/>
        <Skill image={Vue} text='Vue'/>
        <Skill image={Swift} text='Swift'/>
        <Skill image={Ionic} text='Ionic'/>
      </div>
    </div>
  )
}

export default Skills