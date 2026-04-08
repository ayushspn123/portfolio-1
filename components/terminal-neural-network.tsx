"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface Node {
  position: THREE.Vector3
  originalPosition: THREE.Vector3
  connections: number[]
}

interface DataPacket {
  startNode: number
  endNode: number
  progress: number
  speed: number
  color: THREE.Color
}

export function TerminalNeuralNetwork() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    scene.background = null

    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 55

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    })
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Create nodes
    const nodeCount = 18
    const nodes: Node[] = []
    const nodePositions = new Float32Array(nodeCount * 3)

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 80
      const y = (Math.random() - 0.5) * 80
      const z = (Math.random() - 0.5) * 40

      const position = new THREE.Vector3(x, y, z)
      const node: Node = {
        position: position.clone(),
        originalPosition: position.clone(),
        connections: [],
      }

      nodes.push(node)
      nodePositions[i * 3] = x
      nodePositions[i * 3 + 1] = y
      nodePositions[i * 3 + 2] = z
    }

    // Build connections
    nodes.forEach((node, i) => {
      const distances = nodes
        .map((other, j) => ({
          index: j,
          distance: node.originalPosition.distanceTo(other.originalPosition),
        }))
        .filter((d) => d.index !== i)
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 4)

      node.connections = distances.map((d) => d.index)
    })

    // Node mesh
    const nodeGeometry = new THREE.BufferGeometry()
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3))

    const nodeMaterial = new THREE.PointsMaterial({
      size: 4.2,
      color: 0xd8fbff,
      transparent: true,
      opacity: 1,
      sizeAttenuation: true,
    })

    const nodeMesh = new THREE.Points(nodeGeometry, nodeMaterial)
    scene.add(nodeMesh)

    // Create lines
    const lineGeometry = new THREE.BufferGeometry()
    const linePositions: number[] = []
    const lineColors: number[] = []

    nodes.forEach((node, i) => {
      node.connections.forEach((connectionIndex) => {
        if (connectionIndex > i) {
          const other = nodes[connectionIndex]
          linePositions.push(node.position.x, node.position.y, node.position.z)
          linePositions.push(other.position.x, other.position.y, other.position.z)

          const col1 = new THREE.Color(0x8be9ff)
          const col2 = new THREE.Color(0x7dd3fc)
          lineColors.push(col1.r, col1.g, col1.b)
          lineColors.push(col2.r, col2.g, col2.b)
        }
      })
    })

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linePositions), 3)
    )
    lineGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(new Float32Array(lineColors), 3)
    )

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
    })

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lineMesh)

    // Create reusable packet geometry
    const packetGeometry = new THREE.SphereGeometry(1, 12, 12)

    // Data packets
    const packets: DataPacket[] = []
    const packetColors = [
      new THREE.Color(0xe0fbff),
      new THREE.Color(0x8be9ff),
      new THREE.Color(0x7dd3fc),
    ]

    for (let i = 0; i < 9; i++) {
      const startIdx = Math.floor(Math.random() * nodes.length)
      const endIdx = nodes[startIdx].connections[
        Math.floor(Math.random() * nodes[startIdx].connections.length)
      ]
      if (endIdx !== undefined) {
        packets.push({
          startNode: startIdx,
          endNode: endIdx,
          progress: Math.random(),
          speed: 0.004 + Math.random() * 0.002,
          color: packetColors[Math.floor(Math.random() * packetColors.length)].clone(),
        })
      }
    }

    // Lighting
    const light1 = new THREE.PointLight(0x8be9ff, 2.4, 420)
    light1.position.set(60, 60, 60)
    scene.add(light1)

    const light2 = new THREE.PointLight(0x7dd3fc, 2.1, 360)
    light2.position.set(-60, -60, 40)
    scene.add(light2)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85)
    scene.add(ambientLight)

    // Animation
    let frameCount = 0
    const animate = () => {
      requestAnimationFrame(animate)
      frameCount++

      // Node movement
      nodes.forEach((node, i) => {
        const time = frameCount * 0.002
        node.position.x = node.originalPosition.x + Math.sin(time + i) * 7
        node.position.y = node.originalPosition.y + Math.cos(time + i * 0.8) * 7
        node.position.z = node.originalPosition.z + Math.sin(time * 0.7 + i) * 3.5
      })

      // Update node positions
      const posAttr = nodeGeometry.getAttribute("position") as THREE.BufferAttribute
      const posArray = posAttr.array as Float32Array
      nodes.forEach((node, i) => {
        posArray[i * 3] = node.position.x
        posArray[i * 3 + 1] = node.position.y
        posArray[i * 3 + 2] = node.position.z
      })
      posAttr.needsUpdate = true

      // Pulse nodes
      const pulse = Math.sin(frameCount * 0.025) * 0.6 + 3.2
      ;(nodeMaterial as THREE.PointsMaterial).size = pulse

      // Update line positions
      const linePos = lineMesh.geometry.getAttribute("position") as THREE.BufferAttribute
      const linePosArray = linePos.array as Float32Array
      let posIndex = 0
      nodes.forEach((node, i) => {
        node.connections.forEach((connIdx) => {
          if (connIdx > i) {
            linePosArray[posIndex] = node.position.x
            linePosArray[posIndex + 1] = node.position.y
            linePosArray[posIndex + 2] = node.position.z
            linePosArray[posIndex + 3] = nodes[connIdx].position.x
            linePosArray[posIndex + 4] = nodes[connIdx].position.y
            linePosArray[posIndex + 5] = nodes[connIdx].position.z
            posIndex += 6
          }
        })
      })
      linePos.needsUpdate = true

      // Update packets
      packets.forEach((packet) => {
        packet.progress += packet.speed
        if (packet.progress >= 1) {
          const newStart = Math.floor(Math.random() * nodes.length)
          const newEnd = nodes[newStart].connections[
            Math.floor(Math.random() * nodes[newStart].connections.length)
          ]
          if (newEnd !== undefined) {
            packet.startNode = newStart
            packet.endNode = newEnd
            packet.progress = 0
          }
        }
      })

      // Remove old packets
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.userData.isPacket) {
          scene.remove(child)
        }
      })

      // Draw packets with consistent sizing
      packets.forEach((packet) => {
        const start = nodes[packet.startNode].position
        const end = nodes[packet.endNode].position
        const pos = new THREE.Vector3().lerpVectors(start, end, packet.progress)

        // Core packet
        const mat = new THREE.MeshBasicMaterial({
          color: packet.color,
          transparent: true,
          opacity: 1,
        })
        const mesh = new THREE.Mesh(packetGeometry, mat)
        mesh.position.copy(pos)
        mesh.scale.set(1.15, 1.15, 1.15)
        mesh.userData.isPacket = true
        scene.add(mesh)

        // Glow halo
        const haloMat = new THREE.MeshBasicMaterial({
          color: packet.color,
          transparent: true,
          opacity: 0.32,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
        const haloMesh = new THREE.Mesh(packetGeometry, haloMat)
        haloMesh.position.copy(pos)
        haloMesh.scale.set(2.1, 2.1, 2.1)
        haloMesh.userData.isPacket = true
        scene.add(haloMesh)
      })

      // Camera
      camera.position.x = Math.sin(frameCount * 0.0003) * 20
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    const handleResize = () => {
      if (!containerRef.current) return
      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full absolute inset-0 rounded-lg overflow-hidden"
    />
  )
}
