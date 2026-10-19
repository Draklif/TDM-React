import { useState } from 'react'
import { registrarUsuario } from '../../api/tunja'
import styles from './Registro.module.css'

function Registro({ onRegistrado }) {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    perfil: 'general'
  })
  const [error, setError] = useState('')
  const [cargando, setCargando] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setCargando(true)
    setError('')
    try {
      const respuesta = await registrarUsuario(form)
      onRegistrado(respuesta.usuario)
    } catch (err) {
      setError(err.message)
    }
    setCargando(false)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="contrasena" type="password" value={form.contrasena} onChange={handleChange} placeholder="Contraseña (mínimo 8)" required />
      <select name="perfil" value={form.perfil} onChange={handleChange}>
        <option value="general">General</option>
        <option value="estudiante">Estudiante</option>
        <option value="adulto_mayor">Adulto mayor</option>
        <option value="empleado">Empleado</option>
      </select>
      <button type="submit" className={styles.btn} disabled={cargando}>
        {cargando ? 'Registrando...' : 'Registrar'}
      </button>
      {error && <p className={styles.error}>Error: {error}</p>}
    </form>
  )
}

export default Registro
