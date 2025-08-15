import { useState, useEffect } from 'react'
import './App.css'
import Router from './routes'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {
  // Initialize theme from localStorage or default to false (light mode)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('isDark')
    return saved === 'true' ? true : false
  })

  // Apply body styles and save preference on theme change
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#000000' : '#F7F8FC'
    document.body.style.color = isDark ? '#F7F8FC' : '#000000'
    localStorage.setItem('isDark', isDark)
  }, [isDark])

  return (
    <BrowserRouter>
      <NavBar isDark={isDark} setIsDark={setIsDark} />
      
      <Router isDark={isDark} setIsDark={setIsDark} />
    </BrowserRouter>
  )
}

export default App
