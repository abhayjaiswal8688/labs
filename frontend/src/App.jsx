import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/navbar'
import { People } from './components/People'
import { Homepage } from './components/Homepage'
import { Resources } from './components/Resources'
import { Project } from './components/project'
import { Footer } from './components/Footer'

function App() {

  return (
        <BrowserRouter>
          <Hero/>
          <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/people" element={<People/>}/>
            <Route path="/project" element={<Project/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
  )
}

export default App
 