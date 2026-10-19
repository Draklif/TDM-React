import { useState } from 'react'
import styles from './NfcReader.module.css'

// Web NFC solo existe en Chrome para Android. En el PC se usa el NFC Bridge,
// que "teclea" el UID en el campo de texto y presiona Enter.
const celularConNfc = 'NDEFReader' in window

function NfcReader({ onRead }) {
  const [uid, setUid] = useState('')
  const [mensaje, setMensaje] = useState('')
  // El puente solo escribe en el campo que tiene el foco
  const [activo, setActivo] = useState(false)

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
      {/* Al ser un <label>, un clic en cualquier parte de la caja enfoca el input */}
      <form onSubmit={handleSubmit}>
        <label className={activo ? `${styles.caja} ${styles.activo}` : styles.caja}>
          <span className={styles.icono}>
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 8.5a6 6 0 0 1 0 7M9.5 6a10 10 0 0 1 0 12M13 3.5a14 14 0 0 1 0 17" />
            </svg>
          </span>
          <span className={styles.estado}>
            {activo ? 'Listo: acerca la tarjeta al lector' : 'Haz clic aquí para activar el lector'}
          </span>
          <input
            type="text"
            value={uid}
            onChange={(e) => setUid(e.target.value)}
            onFocus={() => setActivo(true)}
            onBlur={() => setActivo(false)}
            placeholder="o escribe el UID y presiona Enter"
          />
        </label>
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
