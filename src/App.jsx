import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero
        name="Ana García"
        role="Diseñadora & Desarrolladora"
        description="Creo experiencias digitales que combinan diseño y código."
      />
      <Footer />
    </div>
  )
}

export default App