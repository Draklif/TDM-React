import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './MapaTunja.module.css'

// Entre el centro y el norte de Tunja
const TUNJA = [5.548, -73.35]

function MapaTunja({ lugares, onSeleccionar, onClicMapa }) {
  // El <div> donde Leaflet dibuja, y el mapa ya creado
  const contenedor = useRef(null)
  const mapa = useRef(null)

  // 1. Crear el mapa una sola vez: [] significa "solo al aparecer"
  useEffect(() => {
    const m = L.map(contenedor.current).setView(TUNJA, 13)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
    }).addTo(m)
    mapa.current = m

    // Limpieza: sin esto, StrictMode crea el mapa dos veces y Leaflet falla
    return () => m.remove()
  }, [])

  // 2. Dibujar los puntos cada vez que cambia la lista de lugares
  useEffect(() => {
    const capa = L.layerGroup().addTo(mapa.current)

    lugares.forEach((lugar) => {
      L.circleMarker([lugar.lat, lugar.lng], { radius: 10, color: '#e11d48' })
        .bindTooltip(lugar.nombre)
        .on('click', () => onSeleccionar(lugar))
        .addTo(capa)
    })

    // Antes de dibujar los nuevos, borra los viejos
    return () => capa.remove()
  }, [lugares, onSeleccionar])

  // 3. Escuchar clics en el mapa (igual que el scroll en el Navbar)
  useEffect(() => {
    const m = mapa.current

    function handleClick(e) {
      onClicMapa(e.latlng)
    }

    m.on('click', handleClick)

    return () => {
      m.off('click', handleClick)
    }
  }, [onClicMapa])

  return <div ref={contenedor} className={styles.mapa} />
}

export default MapaTunja
