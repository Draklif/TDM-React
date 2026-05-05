import styles from './SkillsList.module.css'

function SkillsList({ skills }) {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.tags}>
        {skills.map((skill) => (
          <span key={skill} className={styles.tag}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default SkillsList