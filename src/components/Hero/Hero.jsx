import { motion } from 'framer-motion'
import { lazy, Suspense } from 'react'
import styles from './Hero.module.css'

const Scene = lazy(() => import('../Scene/Scene'))

function Hero({ name, role, description }) {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <motion.p
          className={styles.greeting}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hola, soy
        </motion.p>
        <motion.h1
          className={styles.name}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {name}
        </motion.h1>
        <motion.h2
          className={styles.role}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {role}
        </motion.h2>
        <motion.p
          className={styles.description}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {description}
        </motion.p>
        <motion.a
          href="#projects"
          className={styles.btn}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Ver proyectos
        </motion.a>
      </div>

      <motion.div
        className={styles.canvas}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </motion.div>
    </section>
  )
}

export default Hero