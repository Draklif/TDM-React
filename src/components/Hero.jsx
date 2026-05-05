function Hero({ name, role, description }) {
  return (
    <section className="hero">
      <p className="hero-greeting">Hola, soy</p>
      <h1 className="hero-name">{name}</h1>
      <h2 className="hero-role">{role}</h2>
      <p className="hero-description">{description}</p>
      <a href="#projects" className="hero-btn">Ver proyectos</a>
    </section>
  )
}

export default Hero