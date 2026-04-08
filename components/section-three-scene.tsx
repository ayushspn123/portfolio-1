"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Sparkles, Text } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function CodingMesh() {
  const ringRef = useRef<THREE.Mesh>(null)
  const coreRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(t * 0.18) * 0.03
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.sin(t * 0.45) * 0.11
      ringRef.current.rotation.y += 0.0048
    }
    if (coreRef.current) {
      coreRef.current.rotation.x += 0.0025
      coreRef.current.rotation.z += 0.0022
    }
  })

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[1.8, 1.6, 2.4]} color="#61a2ff" intensity={0.95} />
      <pointLight position={[-1.6, -1.2, 1.6]} color="#32c7bb" intensity={0.62} />

      <mesh ref={ringRef}>
        <torusGeometry args={[1.1, 0.18, 32, 120]} />
        <meshStandardMaterial color="#61a2ff" roughness={0.28} metalness={0.32} transparent opacity={0.8} />
      </mesh>

      <mesh ref={coreRef}>
        <boxGeometry args={[0.68, 0.68, 0.68]} />
        <meshStandardMaterial color="#32c7bb" roughness={0.36} metalness={0.2} />
      </mesh>

      <Text position={[0, 1.32, 0]} fontSize={0.13} color="#e8efff" anchorX="center" anchorY="middle">
        {"git push origin main"}
      </Text>
      <Text position={[-1.25, -0.8, 0]} fontSize={0.11} color="#9ecbff" anchorX="center" anchorY="middle">
        {"MERN"}
      </Text>
      <Text position={[1.2, -0.78, 0]} fontSize={0.11} color="#9ce8e1" anchorX="center" anchorY="middle">
        {"Next.js"}
      </Text>
      <Text position={[0, -1.24, 0]} fontSize={0.1} color="#d4e5ff" anchorX="center" anchorY="middle">
        {"deploy -> monitor -> iterate"}
      </Text>

      <Sparkles count={58} scale={3.8} size={1.7} speed={0.24} color="#dbe9ff" />
    </group>
  )
}

export function SectionThreeScene() {
  return (
    <div className="pointer-events-none absolute -right-20 top-0 hidden h-72 w-72 md:block opacity-60" aria-hidden>
      <Canvas camera={{ position: [0, 0, 4], fov: 40 }} dpr={[1, 1.5]}>
        <CodingMesh />
      </Canvas>
    </div>
  )
}
