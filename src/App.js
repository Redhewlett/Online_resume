import './App.module.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Experiences from './pages/Experiences'
import About from './pages/About'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
        <Route path='/skills' exact={true} element={<Skills />} />
        <Route path='/education' exact={true} element={<Education />} />
        <Route path='/projects' exact={true} element={<Projects />} />
        <Route path='/experiences' exact={true} element={<Experiences />} />
        <Route path='/about' exact={true} element={<About />} />
      </Routes>
    </div>
  )
}

export default App
