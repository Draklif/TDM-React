import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useScrollStage } from '../../hooks/useScrollStage'
import * as THREE from 'three'
import styles from './ScrollModel.module.css'

function lerp(a, b, t) {
  return a + (b - a) * t
}

function Icosahedron({ stage, stageProgress }) {
  const meshRef = useRef()

  const smoothed = useRef({
    posX: 2, posY: -1.5,
    rotX: 0, rotY: 0,
  })

  const path = [
    new THREE.Vector3(2, -1.5, 0),   // inicio — esquina inferior derecha
    new THREE.Vector3(2, 1.5, 0),    // esquina superior derecha
    new THREE.Vector3(-2, 1.5, 0),   // esquina superior izquierda
    new THREE.Vector3(-2, -1.5, 0),  // esquina inferior izquierda
  ]

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const s = smoothed.current
    const ease = 0.01

    let targetPosX = 2
    let targetPosY = -1.5
    let targetRotSpeedX = 0.2
    let targetRotSpeedY = 0.3

    if (stage === 0) {
      targetPosX = 2
      targetPosY = -1.5
    }

    if (stage === 1) {
      const idx = Math.floor(stageProgress * (path.length - 1))
      const next = Math.min(idx + 1, path.length - 1)
      const localT = (stageProgress * (path.length - 1)) % 1
      const pos = new THREE.Vector3().lerpVectors(path[idx], path[next], localT)
      targetPosX = pos.x
      targetPosY = pos.y
      targetRotSpeedX = 0.4
      targetRotSpeedY = 0.3
    }

    if (stage === 2) {
      targetPosX = 0
      targetPosY = 0
      targetRotSpeedX = 0.8
      targetRotSpeedY = 1.2
    }

    s.posX = lerp(s.posX, targetPosX, ease)
    s.posY = lerp(s.posY, targetPosY, ease)
    s.rotSpeedX = lerp(s.rotSpeedX ?? 0.2, targetRotSpeedX, ease)
    s.rotSpeedY = lerp(s.rotSpeedY ?? 0.3, targetRotSpeedY, ease)

    meshRef.current.position.set(s.posX, s.posY, 0)
    meshRef.current.rotation.x = t * s.rotSpeedX
    meshRef.current.rotation.y = t * s.rotSpeedY
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.8, 0]} />
      <meshBasicMaterial
        color="#666666"
        wireframe
        transparent
        opacity={0.3}
      />
    </mesh>
  )
}

function ScrollModel() {
  const { stage, stageProgress } = useScrollStage()

  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Icosahedron stage={stage} stageProgress={stageProgress} />
      </Canvas>
    </div>
  )
}

export default ScrollModel