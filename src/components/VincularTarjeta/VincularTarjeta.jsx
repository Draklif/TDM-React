import { useState } from 'react'
import { vincularTarjeta } from '../../api/tunja'
import NfcReader from '../NfcReader/NfcReader'
import styles from './VincularTarjeta.module.css'

function VincularTarjeta({ usuario }) {
  const [mensaje, setMensaje] = useState('')
  const [error, setError] = useState('')

  async function handleRead(uid) {
    setMensaje('')
    setError('')
    try {
      await vincularTarjeta(uid, usuario.id)
      setMensaje(`Tarjeta ${uid} vinculada a ${usuario.nombre}`)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className={styles.vincular}>
      <p>
        Usuario: <strong>{usuario.nombre}</strong> (id {usuario.id})
      </p>
      <NfcReader onRead={handleRead} />
      {mensaje && <p className={styles.ok}>{mensaje}</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
    </div>
  )
}

export default VincularTarjeta
