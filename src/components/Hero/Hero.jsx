import { useInView } from '../../hooks/useInView'
import styles from './Hero.module.css'

function Hero({ name, role, description }) {
  const { ref, inView } = useInView()

  function cls(delay) {
    return [styles.hidden, inView ? styles.visible : '', styles[delay]].join(' ')
  }

  return (
    <section className={styles.hero} ref={ref}>
      <p className={cls('delay1') + ' ' + styles.greeting}>Hola, soy</p>
      <h1 className={`${styles.name} ${cls('delay2')}`}>{name}</h1>
      <h2 className={`${styles.role} ${cls('delay3')}`}>{role}</h2>
      <p className={`${styles.description} ${cls('delay4')}`}>{description}</p>
      <a href="#projects" className={`${styles.btn} ${cls('delay4')}`}>
        Ver proyectos
      </a>
    </section>
  )
}

export default Hero