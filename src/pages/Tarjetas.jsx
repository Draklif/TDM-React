import { useState } from 'react'
import { Link } from 'react-router-dom'
import Registro from '../components/Registro/Registro'
import VincularTarjeta from '../components/VincularTarjeta/VincularTarjeta'
import ConsultarTarjeta from '../components/ConsultarTarjeta/ConsultarTarjeta'
import styles from './Tarjetas.module.css'

function Tarjetas() {
  // El usuario que se registra en el paso 1 se usa en el paso 2
  const [usuario, setUsuario] = useState(null)

  return (
    <div className={styles.tarjetas}>
      <Link to="/" className={styles.back}>← Volver</Link>
      <h1>Usuarios y tarjetas</h1>

      <section className={styles.paso}>
        <h2><span>1</span> Registrar usuario</h2>
        <Registro onRegistrado={setUsuario} />
      </section>

      <section className={styles.paso}>
        <h2><span>2</span> Vincular una tarjeta</h2>
        {usuario
          ? <VincularTarjeta usuario={usuario} />
          : <p className={styles.espera}>Primero registra un usuario en el paso 1.</p>}
      </section>

      <section className={styles.paso}>
        <h2><span>3</span> ¿De quién es esta tarjeta?</h2>
        <ConsultarTarjeta />
      </section>
    </div>
  )
}

export default Tarjetas
