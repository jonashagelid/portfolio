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
        <p><a href="https://github.com/jonashagelid">Linkedin</a></p>
        <p><a href="https://github.com/jonashagelid">GitHub</a></p>
      </div>
    </div>
  )
}

export default Footer