import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei'
import { useScrollProgress } from '../../hooks/useScrollProgress'

function AnimatedSphere({ scrollProgress }) {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.3 + scrollProgress * Math.PI * 2
    meshRef.current.rotation.y = t * 0.5 + scrollProgress * Math.PI * 4
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.2
    meshRef.current.scale.setScalar(1 + scrollProgress * 0.3)
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <MeshDistortMaterial
        color="#888888"
        distort={0.4 + scrollProgress * 0.3}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

function Scene() {
  const scrollProgress = useScrollProgress()

  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4466ff" />
      <AnimatedSphere scrollProgress={scrollProgress} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

export default Scene