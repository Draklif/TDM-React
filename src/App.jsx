import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar/Navbar'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import PageTransition from './components/PageTransition/PageTransition'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'
import styles from './App.module.css'

const Background = lazy(() => import('./components/Background/Background'))

function AnimatedRoutes({ darkMode, onToggle }) {
  const location = useLocation()

  return (
    <>
      <Navbar darkMode={darkMode} onToggle={onToggle} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition><Home /></PageTransition>
          } />
          <Route path="/projects/:id" element={
            <PageTransition><ProjectDetail /></PageTransition>
          } />
        </Routes>
      </AnimatePresence>
    </>
  )
}

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
        <Suspense fallback={null}>
          <Background />
        </Suspense>
        <ScrollProgress />
        <div className={styles.content}>
          <AnimatedRoutes darkMode={darkMode} onToggle={toggleDarkMode} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App