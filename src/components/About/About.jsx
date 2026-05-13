import { useInView } from '../../hooks/useInView'
import styles from './About.module.css'

function About({ photo, bio }) {
  const { ref, inView } = useInView({ threshold: 0.15 })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <img
        src={photo}
        alt="Foto de perfil"
        className={`${styles.photo} ${styles.photoHidden} ${inView ? styles.photoVisible : ''}`}
      />
      <div className={`${styles.content} ${styles.hidden} ${inView ? styles.visible : ''}`}>
        <h2>Sobre mí</h2>
        <p>{bio}</p>
      </div>
    </section>
  )
}

export default About