import { useState } from 'react'
import { projects } from '../../data/projects'
import styles from './ProjectList.module.css'

const categories = ['Todos', 'Diseño UI', 'Motion', 'Desarrollo']

function ProjectList() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filtered = activeFilter === 'Todos'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className={styles.projects}>
      <h2>Proyectos</h2>

      <div className={styles.filters}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${activeFilter === cat ? styles.active : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filtered.length > 0 ? (
          filtered.map((project) => (
            <div key={project.id} className={styles.card}>
              <img src={project.image} alt={project.title} className={styles.image} />
              <div className={styles.info}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className={styles.category}>{project.category}</span>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.empty}>No hay proyectos en esta categoría.</p>
        )}
      </div>
    </section>
  )
}

export default ProjectList