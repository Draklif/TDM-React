import { motion } from 'framer-motion'
import styles from './SkillsList.module.css'

function SkillsList({ skills }) {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.tags}>
        {skills.map((skill, index) => (
          <motion.span
            key={skill}
            className={styles.tag}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  )
}

export default SkillsList