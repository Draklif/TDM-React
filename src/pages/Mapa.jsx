import { useState } from 'react'
import { Link } from 'react-router-dom'
import MapaTunja from '../components/MapaTunja/MapaTunja'
import { lugares } from '../data/lugaresTunja'
import styles from './Tarjetas.module.css'

function Mapa() {
  const [lugar, setLugar] = useState(null)
  const [punto, setPunto] = useState(null)

  return (
    <div className={styles.tarjetas}>
      <Link to="/" className={styles.back}>← Volver</Link>
      <h1>Tunja 2040</h1>

      <section className={styles.paso}>
        <MapaTunja lugares={lugares} onSeleccionar={setLugar} onClicMapa={setPunto} />
      </section>

      <section className={styles.paso}>
        <h2><span>1</span> Lugar seleccionado</h2>
        {lugar
          ? <p><strong>{lugar.nombre}</strong> — {lugar.descripcion}</p>
          : <p className={styles.espera}>Haz clic en un punto rojo.</p>}
      </section>

      <section className={styles.paso}>
        <h2><span>2</span> Coordenadas para tu proyecto</h2>
        {punto
          ? <code>lat: {punto.lat.toFixed(4)}, lng: {punto.lng.toFixed(4)}</code>
          : <p className={styles.espera}>Haz clic en cualquier parte del mapa.</p>}
      </section>
    </div>
  )
}

export default Mapa
