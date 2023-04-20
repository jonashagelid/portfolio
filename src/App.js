import React from 'react'
import { Header, Footer, Projects, Skills } from './containers'
import { Navbar, Project } from './components'
import './app.css'
import './index.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient__bg'>
            <Navbar/>
            <Header/>
        </div>
        <Skills />
        <Projects/>
        <Footer/>

    </div>
  )
}

export default App