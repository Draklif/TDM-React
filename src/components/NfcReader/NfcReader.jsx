import { useState } from 'react'
import styles from './NfcReader.module.css'

// Web NFC solo existe en Chrome para Android. En el PC se usa el NFC Bridge,
// que "teclea" el UID en el campo de texto y presiona Enter.
const celularConNfc = 'NDEFReader' in window

function NfcReader({ onRead }) {
  const [uid, setUid] = useState('')
  const [mensaje, setMensaje] = useState('')

  // PC: el NFC Bridge escribe el UID y presiona Enter, que envía el formulario
  function handleSubmit(e) {
    e.preventDefault()
    if (!uid.trim()) return
    onRead(uid.trim().toUpperCase())
    setUid('')
  }

  // Celular: lee una tarjeta y deja de escuchar
  async function leerConCelular() {
    try {
      const lector = new window.NDEFReader()
      const control = new AbortController()
      await lector.scan({ signal: control.signal })
      setMensaje('Acerca la tarjeta al celular...')

      lector.onreading = (e) => {
        control.abort()
        setMensaje('')
        // El celular entrega "04:a1:b2:c3", la API espera "04A1B2C3"
        onRead(e.serialNumber.replaceAll(':', '').toUpperCase())
      }
    } catch (error) {
      setMensaje('No se pudo usar el NFC: ' + error.message)
    }
  }

  return (
    <div className={styles.reader}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={uid}
          onChange={(e) => setUid(e.target.value)}
          placeholder="Haz clic aquí y acerca la tarjeta al lector..."
        />
      </form>

      {celularConNfc && (
        <button type="button" className={styles.btn} onClick={leerConCelular}>
          Leer con el celular
        </button>
      )}

      {mensaje && <p className={styles.mensaje}>{mensaje}</p>}
    </div>
  )
}

export default NfcReader
