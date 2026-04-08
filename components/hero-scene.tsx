"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { PointMaterial, Points, Text } from "@react-three/drei"
import { useMemo, useRef } from "react"
import * as THREE from "three"

function EngineeringField() {
  const ringRef = useRef<THREE.Mesh>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const shellRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const stars = useMemo(() => {
    const points = new Float32Array(700 * 3)
    for (let i = 0; i < points.length; i += 3) {
      points[i] = (Math.random() - 0.5) * 5
      points[i + 1] = (Math.random() - 0.5) * 4
      points[i + 2] = (Math.random() - 0.5) * 4
    }
    return points
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.18) * 0.12
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(t * 0.28) * 0.18
      ringRef.current.rotation.y += 0.0024
      ringRef.current.rotation.z = Math.cos(t * 0.26) * 0.05
    }
    if (coreRef.current) {
      coreRef.current.rotation.y -= 0.0028
      const s = 1 + Math.sin(t * 0.8) * 0.045
      coreRef.current.scale.set(s, s, s)
    }
    if (shellRef.current) {
      shellRef.current.rotation.x += 0.0012
      shellRef.current.rotation.y -= 0.0016
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.62} />
      <directionalLight intensity={0.86} position={[2.5, 2.5, 2.2]} color="#c6dcff" />
      <pointLight intensity={1.1} position={[-2, -1.4, 2.5]} color="#49c8ba" />

      <mesh ref={ringRef}>
        <torusKnotGeometry args={[0.98, 0.24, 180, 26]} />
        <meshStandardMaterial color="#3d8fff" roughness={0.22} metalness={0.48} />
      </mesh>

      <mesh ref={coreRef}>
        <octahedronGeometry args={[0.54, 0]} />
        <meshStandardMaterial color="#22b8b8" roughness={0.3} metalness={0.3} />
      </mesh>

      <mesh ref={shellRef}>
        <icosahedronGeometry args={[1.35, 1]} />
        <meshBasicMaterial color="#93b8ff" wireframe transparent opacity={0.2} />
      </mesh>

      <Text position={[-1.2, 1.05, 0.2]} fontSize={0.18} color="#eef4ff" anchorX="center" anchorY="middle">
        {"</>"}
      </Text>
      <Text position={[1.28, 0.76, -0.05]} fontSize={0.14} color="#a4e6e6" anchorX="center" anchorY="middle">
        {"{ API }"}
      </Text>
      <Text position={[-1.26, -0.88, -0.1]} fontSize={0.12} color="#ffc18c" anchorX="center" anchorY="middle">
        {"npm run build"}
      </Text>
      <Text position={[1.08, -1.04, 0]} fontSize={0.12} color="#d6e4ff" anchorX="center" anchorY="middle">
        {"TypeScript"}
      </Text>

      <Points positions={stars} stride={3} frustumCulled>
        <PointMaterial transparent size={0.014} sizeAttenuation depthWrite={false} color="#dce9ff" />
      </Points>
    </group>
  )
}

export function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 3.8], fov: 48 }} dpr={[1, 1.5]}>
        <EngineeringField />
      </Canvas>
    </div>
  )
}
