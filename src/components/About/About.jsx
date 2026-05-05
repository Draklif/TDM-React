import styles from './About.module.css'

function About({ photo, bio }) {
  return (
    <section id="about" className={styles.about}>
      <img src={photo} alt="Foto de perfil" className={styles.photo} />
      <div className={styles.content}>
        <h2>Sobre mí</h2>
        <p>{bio}</p>
      </div>
    </section>
  )
}

export default About