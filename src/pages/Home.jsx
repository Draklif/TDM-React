import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import SkillsList from '../components/SkillsList/SkillsList'
import ProjectList from '../components/ProjectList/ProjectList'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { skills } from '../data/skills'

function Home() {
  return (
    <>
      <Hero
        name="Ana García"
        role="Diseñadora & Desarrolladora"
        description="Creo experiencias digitales que combinan diseño y código."
      />
      <About
        photo="https://i.pravatar.cc/300"
        bio="Soy diseñadora y desarrolladora con foco en experiencias digitales."
      />
      <SkillsList skills={skills} />
      <ProjectList />
      <Contact />
      <Footer />
    </>
  )
}

export default Home