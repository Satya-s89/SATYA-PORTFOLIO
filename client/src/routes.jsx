import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Contact from './components/Contact'
import About from './components/About'
import Projects from './Projects'
import ProjectDetails from './ProjectDetails'

const Router = ({ isDark, setIsDark }) => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home isDark={isDark} setIsDark={setIsDark} />} />
        <Route path='/about' element={<About isDark={isDark} setIsDark={setIsDark} />} />
        <Route path='/contact' element={<Contact isDark={isDark} setIsDark={setIsDark} />} />
        <Route path='/projects' element={<Projects isDark={isDark} setIsDark={setIsDark} />} />
        <Route path='/projects/:id' element={<ProjectDetails isDark={isDark} setIsDark={setIsDark} />} />
      </Routes>
    </div>
  )
}

export default Router
