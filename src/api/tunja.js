// Todas las llamadas a TunjaAPI pasan por este archivo.
// Documentación: https://nfc.multimediaudeb.com/docs

const API = 'https://nfc.multimediaudeb.com/api/v1'

// La clave sale del archivo .env.local (ver .env.example).
// shortcut: con VITE_ la clave queda visible en el navegador; para producción va en un servidor.
const CLAVE = import.meta.env.VITE_TUNJA_CLAVE

async function tunja(camino, metodo = 'GET', cuerpo) {
  const respuesta = await fetch(API + camino, {
    method: metodo,
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': CLAVE,
    },
    body: cuerpo ? JSON.stringify(cuerpo) : undefined,
  })

  const datos = await respuesta.json()

  // fetch no falla solo con un 400 o un 409: hay que revisarlo a mano
  if (!respuesta.ok) {
    throw new Error(datos.error)
  }

  return datos
}

// Crea un usuario. Devuelve { usuario, acceso, refresco }
export function registrarUsuario(datos) {
  return tunja('/auth/register', 'POST', datos)
}

// Le asocia una tarjeta NFC a un usuario
export function vincularTarjeta(uid, usuarioId) {
  return tunja('/cards', 'POST', { uid, usuario_id: usuarioId })
}

// Dice de quién es una tarjeta
export function buscarTarjeta(uid) {
  return tunja('/cards/' + uid)
}
