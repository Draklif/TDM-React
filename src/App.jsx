import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import styles from './App.module.css'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved !== null ? JSON.parse(saved) : true
  })

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <BrowserRouter>
      <div className={darkMode ? styles.dark : styles.light}>
        <ScrollProgress />
        <Navbar darkMode={darkMode} onToggle={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App