import { useState } from 'react'
import { buscarTarjeta } from '../../api/tunja'
import NfcReader from '../NfcReader/NfcReader'
import styles from './ConsultarTarjeta.module.css'

function ConsultarTarjeta() {
  const [tarjeta, setTarjeta] = useState(null)
  const [error, setError] = useState('')

  async function handleRead(uid) {
    setTarjeta(null)
    setError('')
    try {
      const datos = await buscarTarjeta(uid)
      setTarjeta(datos)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.consultar}>
      <NfcReader onRead={handleRead} />

      {error && <p className={styles.error}>Error: {error}</p>}

      {tarjeta && (
        <div className={styles.ficha}>
          <span className={styles.avatar}>{tarjeta.usuario.iniciales}</span>
          <div>
            <strong>{tarjeta.usuario.nombre}</strong>
            <p>Perfil: {tarjeta.usuario.perfil}</p>
            <p>Saldo: ${tarjeta.usuario.saldo}</p>
          </div>
          <span className={tarjeta.activa ? styles.activa : styles.bloqueada}>
            {tarjeta.activa ? 'Activa' : 'Bloqueada'}
          </span>
        </div>
      )}
    </div>
  )
}

export default ConsultarTarjeta
