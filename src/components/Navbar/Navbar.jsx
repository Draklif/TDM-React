import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

function Navbar({ darkMode, onToggle }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <span className={styles.logo}>dev.portfolio</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <ul className={styles.links}>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <button className={styles.themeBtn} onClick={onToggle}>
          {darkMode ? '☀ Claro' : '☾ Oscuro'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar