import styles from './Contact.module.css'

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contacto</h2>
      <p className={styles.subtitle}>
        ¿Tenés un proyecto en mente? Escribime y lo conversamos.
      </p>
      <form className={styles.form}>
        <div className={styles.field}>
          <label>Nombre</label>
          <input type="text" placeholder="Tu nombre" />
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input type="email" placeholder="tu@email.com" />
        </div>
        <div className={styles.field}>
          <label>Mensaje</label>
          <textarea rows="5" placeholder="Contame sobre tu proyecto..." />
        </div>
        <button type="button" className={styles.btn}>Enviar mensaje</button>
      </form>
    </section>
  )
}

export default Contact