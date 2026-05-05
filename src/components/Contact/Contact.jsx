import { useState } from 'react'
import styles from './Contact.module.css'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'El nombre es requerido'
    if (!form.email.includes('@')) newErrors.email = 'Email inválido'
    if (form.message.trim().length < 10) newErrors.message = 'El mensaje es muy corto'
    return newErrors
  }

  function handleSubmit() {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setErrors({})
  }

  if (submitted) {
    return (
      <section id="contact" className={styles.contact}>
        <h2>Contacto</h2>
        <p className={styles.success}>
          ¡Mensaje enviado! Te respondo a la brevedad.
        </p>
      </section>
    )
  }

  return (
    <section id="contact" className={styles.contact}>
      <h2>Contacto</h2>
      <p className={styles.subtitle}>
        ¿Tenés un proyecto en mente? Escribime y lo conversamos.
      </p>
      <form className={styles.form}>
        <div className={styles.field}>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Tu nombre"
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="tu@email.com"
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div className={styles.field}>
          <label>Mensaje</label>
          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Contame sobre tu proyecto..."
          />
          {errors.message && <span className={styles.error}>{errors.message}</span>}
        </div>
        <button type="button" className={styles.btn} onClick={handleSubmit}>
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}

export default Contact