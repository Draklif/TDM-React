import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import SkillsList from './components/SkillsList/SkillsList'
import ProjectList from './components/ProjectList/ProjectList'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const skills = [
  'React', 'JavaScript', 'HTML', 'CSS',
  'Figma', 'After Effects', 'Three.js', 'Motion Design'
]

const projects = [
  {
    id: 1,
    title: 'Rediseño de app bancaria',
    description: 'UX/UI para una fintech enfocada en simplicidad y accesibilidad.',
    category: 'Diseño UI',
    image: 'https://picsum.photos/seed/proj1/400/300'
  },
  {
    id: 2,
    title: 'Portfolio motion',
    description: 'Sitio personal con animaciones en After Effects exportadas a web.',
    category: 'Motion',
    image: 'https://picsum.photos/seed/proj2/400/300'
  },
  {
    id: 3,
    title: 'Tienda online',
    description: 'E-commerce construido con React y una API de productos.',
    category: 'Desarrollo',
    image: 'https://picsum.photos/seed/proj3/400/300'
  },
  {
    id: 4,
    title: 'Identidad visual',
    description: 'Sistema de diseño para una startup de tecnología educativa.',
    category: 'Diseño UI',
    image: 'https://picsum.photos/seed/proj4/400/300'
  }
]

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
      <ProjectList projects={projects} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App