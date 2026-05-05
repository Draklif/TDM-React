import styles from './ProjectList.module.css'

function ProjectList({ projects }) {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Proyectos</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <div className={styles.info}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className={styles.category}>{project.category}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectList