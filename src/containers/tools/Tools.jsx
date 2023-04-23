import React from 'react'
import './tools.css';
import { Skill } from '../../components';
import JS from '../../assets/javascript.png'
import Kotlin from '../../assets/kotlin.png'
import Css from '../../assets/css.png'
import Html from '../../assets/html.png'
import Node from '../../assets/node.png'
import react from '../../assets/react.png'
import TS from '../../assets/typescript.png'
import Vue from '../../assets/vue.png'



const Tools = () => {
  return (
    <div className='portfolio__tools section__margin' id='tool'>
      <div className='portfolio__tools-header'>
        <h2 className='gradient__text'>Technologies</h2>
      </div>
      <div className='portfolio__tools-container'>
        <Skill image={JS} text='JavaScript'/>
        <Skill image={Kotlin} text='Kotlin'/>
        <Skill image={Css} text='CSS'/>
        <Skill image={Html} text='HTML'/>
        <Skill image={Node} text='Node.js'/>
        <Skill image={react} text='React'/>
        <Skill image={TS} text='TypeScript'/>
        <Skill image={Vue} text='Vue'/>
        <Skill image={Vue} text='Swift'/>
        <Skill image={Vue} text='Ionic'/>
      </div>
    </div>
  )
}

export default Tools