import React from 'react'
import { Header, Footer, Projects, Skills, Tools } from './containers'
import { Navbar} from './components'
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
        <Tools />
        <Projects/>
        <Footer/>

    </div>
  )
}

export default App