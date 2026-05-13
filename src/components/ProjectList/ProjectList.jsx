import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './ProjectList.module.css'

const categories = ['Todos', 'Diseño UI', 'Motion', 'Desarrollo']

function ProjectList() {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/src/data/projects.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
  }, [])

  const filtered = activeFilter === categories[0]
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  if (loading) {
    return (
      <section className={styles.projects}>
        <p className={styles.empty}>Cargando proyectos...</p>
      </section>
    )
  }

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
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className={styles.cardLink}
            >
              <div className={styles.card}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.info}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className={styles.category}>{project.category}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className={styles.empty}>No hay proyectos en esta categoría.</p>
        )}
      </div>
    </section>
  )
}

export default ProjectList