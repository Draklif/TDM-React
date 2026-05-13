import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useScrollProgress } from '../../hooks/useScrollProgress'
import * as THREE from 'three'
import styles from './Background.module.css'

function Particles({ scrollProgress }) {
  const meshRef = useRef()
  const count = 2000

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10

      const shade = 0.3 + Math.random() * 0.4
      colors[i * 3]     = shade
      colors[i * 3 + 1] = shade
      colors[i * 3 + 2] = shade + Math.random() * 0.2
    }

    return { positions, colors }
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t * 0.03 + scrollProgress * Math.PI
    meshRef.current.rotation.x = scrollProgress * Math.PI * 0.5
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Background() {
  const scrollProgress = useScrollProgress()

  return (
    <div className={styles.background}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}

export default Background