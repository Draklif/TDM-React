import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei'

function AnimatedSphere() {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.x = t * 0.3
    meshRef.current.rotation.y = t * 0.5
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.2
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1.2, 64, 64]} />
      <MeshDistortMaterial
        color="#888888"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#4466ff" />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

export default Scene