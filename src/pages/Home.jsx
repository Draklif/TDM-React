import { useState } from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import SkillsList from '../components/SkillsList/SkillsList'
import ProjectList from '../components/ProjectList/ProjectList'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import NfcReader from '../components/NfcReader/NfcReader'
import { skills } from '../data/skills'
import styles from './Home.module.css'

function Home() {
  const [ultimaTarjeta, setUltimaTarjeta] = useState('')

  return (
    <div className={styles.home}>
      <section className={styles.scrollSection}>
        <Hero
          name="Ana García"
          role="Diseñadora & Desarrolladora"
          description="Creo experiencias digitales que combinan diseño y código."
        />
      </section>
      <section className={styles.scrollSection}>
        <About
          photo="https://i.pravatar.cc/300"
          bio="Soy diseñadora y desarrolladora con foco en experiencias digitales."
        />
      </section>
      <section className={styles.scrollSection}>
        <SkillsList skills={skills} />
      </section>
      <section className={styles.scrollSection}>
        <div>
          <h2>Lector NFC</h2>
          <NfcReader onRead={setUltimaTarjeta} />
          {ultimaTarjeta && <p>Última tarjeta: {ultimaTarjeta}</p>}
        </div>
      </section>
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home