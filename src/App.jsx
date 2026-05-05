import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import SkillsList from './components/SkillsList/SkillsList'
import ProjectList from './components/ProjectList/ProjectList'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { skills } from './data/skills'

function App() {
  return (
    <div>
      <Navbar />
      <Hero
        name="Ana García"
        role="Diseñadora & Desarrolladora"
        description="Creo experiencias digitales que combinan diseño y código."
      />
      <About
        photo="https://i.pravatar.cc/300"
        bio="Soy diseñadora y desarrolladora con foco en experiencias digitales. Me interesa el cruce entre el diseño visual y la tecnología."
      />
      <SkillsList skills={skills} />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  )
}

export default App