import React from 'react'
import './tools.css';
import { Skill } from '../../components';
import Intellij from '../../assets/intellij.png'
import Android from '../../assets/android.png'
import VSC from '../../assets/vscode.png'
import Xcode from '../../assets/xcode.png'
import Figma from '../../assets/figma.png'
import Github from '../../assets/github.png'
import Gitlab from '../../assets/gitlab.png'
import Postman from '../../assets/postman.png'



const Tools = () => {
  return (
    <div className='portfolio__tools section__margin' id='tools'>
      <div className='portfolio__tools-header'>
        <h2 className='gradient__text'>Tools</h2>
      </div>
      <div className='portfolio__tools-container'>
        <Skill image={Intellij} text='IntelliJ'/>
        <Skill image={Android} text='Android Studio'/>
        <Skill image={VSC} text='Visual Studio Code'/>
        <Skill image={Xcode} text='XCode'/>
        <Skill image={Figma} text='Figma'/>
        <Skill image={Github} text='Github'/>
        <Skill image={Gitlab} text='GitLab'/>
        <Skill image={Postman} text='Postman'/>
      </div>
    </div>
  )
}

export default Tools