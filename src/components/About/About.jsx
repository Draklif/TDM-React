import { motion } from 'framer-motion'
import styles from './About.module.css'

function About({ photo, bio }) {
  return (
    <section id="about" className={styles.about}>
      <motion.img
        src={photo}
        alt="Foto de perfil"
        className={styles.photo}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Sobre mí</h2>
        <p>{bio}</p>
      </motion.div>
    </section>
  )
}

export default About