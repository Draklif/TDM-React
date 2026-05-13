import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/src/data/projects.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(id))
        setProject(found)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className={styles.loading}>Cargando...</div>
  if (!project) return <div className={styles.loading}>Proyecto no encontrado.</div>

  return (
    <div className={styles.detail}>
      <Link to="/" className={styles.back}>← Volver</Link>
      <img src={project.image} alt={project.title} className={styles.image} />
      <div className={styles.content}>
        <span className={styles.category}>{project.category}</span>
        <h1>{project.title}</h1>
        <p className={styles.year}>{project.year}</p>
        <p className={styles.description}>{project.longDescription}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail