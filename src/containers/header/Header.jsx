import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='portfolio__header section__padding' id='home'>
      <div className='portfolio__header-content'>
        <h1 className='gradient__text'>
          Hi, I'm Jonas
        </h1>
        <p>
          I'm a Front-end and mobile development student in the last year of my bachelor at Høyskolen Kristiania. <br/><br/>
          During my studies I have worked as an assistant teacher in the courses Creative Web Project, Object Oriented Programming,<br/> Information security, and Introduction to Programming, where I have assisted students in workshops, graded midterm projects,<br/> and conducted repetition lectures.
        </p>
      </div>
    </div>
  )
}

export default Header