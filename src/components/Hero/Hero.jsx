import styles from './Hero.module.css'

function Hero({ name, role, description }) {
  return (
    <section className={styles.hero}>
      <p className={styles.greeting}>Hola, soy</p>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.role}>{role}</h2>
      <p className={styles.description}>{description}</p>
      <a href="#projects" className={styles.btn}>Ver proyectos</a>
    </section>
  )
}

export default Hero