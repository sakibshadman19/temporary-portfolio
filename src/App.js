import React from 'react'
import { Navbar } from './components'
import { About,Footer,Header,Skills,Testimonial,Work } from './container'
import './App.scss'

const App = () => {
  return (
    <div className='app'>
            <Navbar/>
            <Header/>
            <About/>
            <Work/>
            <Skills/>
            
          <Footer/>
            
    </div>
  )
}

export default App