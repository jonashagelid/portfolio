import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='portfolio__footer section__padding' id='contact'>
      <div className='portfolio__footer-content'>
        <h1 className='gradient__text'>
          Contact:
        </h1>
        <p>jonas.hagelid@gmail.com</p>
        <p>97 49 74 84</p>
        <p><a href="https://www.linkedin.com/in/jonas-hagelid-817b72146/" target='_blank' rel="noreferrer">Linkedin</a></p>
        <p><a href="https://github.com/jonashagelid" target='_blank' rel="noreferrer">GitHub</a></p>
      </div>
    </div>
  )
}

export default Footer