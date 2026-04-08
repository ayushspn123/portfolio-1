"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

interface Node {
  position: THREE.Vector3
  velocity: THREE.Vector3
  originalPosition: THREE.Vector3
  connections: number[]
}

interface DataPacket {
  startNode: number
  endNode: number
  progress: number
  speed: number
}

export default function NeuralNetworkThree() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const nodesRef = useRef<Node[]>([])
  const packetsRef = useRef<DataPacket[]>([])
  const lineRef = useRef<THREE.LineSegments | null>(null)
  const nodeGeometryRef = useRef<THREE.BufferGeometry | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = null

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    )
    camera.position.z = 100
    cameraRef.current = camera

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.sortObjects = false
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create nodes
    const nodeCount = 30
    const nodes: Node[] = []
    const nodePositions = new Float32Array(nodeCount * 3)

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 300
      const y = (Math.random() - 0.5) * 300
      const z = (Math.random() - 0.5) * 200

      const position = new THREE.Vector3(x, y, z)
      const node: Node = {
        position: position.clone(),
        originalPosition: position.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.5,
          (Math.random() - 0.5) * 0.3
        ),
        connections: [],
      }

      nodes.push(node)
      nodePositions[i * 3] = x
      nodePositions[i * 3 + 1] = y
      nodePositions[i * 3 + 2] = z
    }

    // Build connections (each node connects to nearest 3-5 neighbors)
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

    nodesRef.current = nodes

    // Create node mesh
    const nodeGeometry = new THREE.BufferGeometry()
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3))
    nodeGeometryRef.current = nodeGeometry

    const nodeMaterial = new THREE.PointsMaterial({
      size: 2,
      color: 0x60a5fa,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    })

    const nodeMesh = new THREE.Points(nodeGeometry, nodeMaterial)
    scene.add(nodeMesh)

    // Create connection lines
    const lineGeometry = new THREE.BufferGeometry()
    const linePositions: number[] = []

    nodes.forEach((node, i) => {
      node.connections.forEach((connectionIndex) => {
        if (connectionIndex > i) {
          // Only draw each line once
          linePositions.push(
            node.position.x,
            node.position.y,
            node.position.z,
            nodes[connectionIndex].position.x,
            nodes[connectionIndex].position.y,
            nodes[connectionIndex].position.z
          )
        }
      })
    })

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(linePositions), 3)
    )

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x0891b2,
      transparent: true,
      opacity: 0.3,
      linewidth: 1,
    })

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    lineRef.current = lineMesh
    scene.add(lineMesh)

    // Create initial data packets
    for (let i = 0; i < 15; i++) {
      const startNodeIndex = Math.floor(Math.random() * nodes.length)
      const nodeConnections = nodes[startNodeIndex].connections
      if (nodeConnections.length > 0) {
        packetsRef.current.push({
          startNode: startNodeIndex,
          endNode: nodeConnections[
            Math.floor(Math.random() * nodeConnections.length)
          ],
          progress: Math.random(),
          speed: 0.002 + Math.random() * 0.003,
        })
      }
    }

    // Create data packet mesh
    const packetGeometry = new THREE.SphereGeometry(1.5, 8, 8)
    const packetMaterial = new THREE.MeshPhongMaterial({
      color: 0x22d3ee,
      emissive: 0x22d3ee,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.7,
    })

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const pointLight1 = new THREE.PointLight(0x60a5fa, 1, 500)
    pointLight1.position.set(100, 100, 100)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x22d3ee, 0.8, 400)
    pointLight2.position.set(-100, -100, 50)
    scene.add(pointLight2)

    // Animation loop
    let animationId: number

    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Update node positions with subtle oscillation
      nodes.forEach((node, i) => {
        node.position.x =
          node.originalPosition.x + Math.sin(Date.now() * 0.0001 + i) * 10
        node.position.y =
          node.originalPosition.y + Math.cos(Date.now() * 0.00008 + i) * 10
        node.position.z =
          node.originalPosition.z + Math.sin(Date.now() * 0.00006 + i) * 5
      })

      // Update node positions in geometry
      const positionAttribute = nodeGeometry.getAttribute("position") as THREE.BufferAttribute
      const posArray = positionAttribute.array as Float32Array
      nodes.forEach((node, i) => {
        posArray[i * 3] = node.position.x
        posArray[i * 3 + 1] = node.position.y
        posArray[i * 3 + 2] = node.position.z
      })
      positionAttribute.needsUpdate = true

      // Update line geometry
      if (lineRef.current) {
        const linePos = lineRef.current.geometry.getAttribute(
          "position"
        ) as THREE.BufferAttribute
        const linePosArray = linePos.array as Float32Array
        let posIndex = 0

        nodes.forEach((node, i) => {
          node.connections.forEach((connectionIndex) => {
            if (connectionIndex > i) {
              linePosArray[posIndex] = node.position.x
              linePosArray[posIndex + 1] = node.position.y
              linePosArray[posIndex + 2] = node.position.z
              linePosArray[posIndex + 3] = nodes[connectionIndex].position.x
              linePosArray[posIndex + 4] = nodes[connectionIndex].position.y
              linePosArray[posIndex + 5] = nodes[connectionIndex].position.z
              posIndex += 6
            }
          })
        })
        linePos.needsUpdate = true
      }

      // Update and render data packets
      packetsRef.current.forEach((packet, i) => {
        packet.progress += packet.speed

        if (packet.progress >= 1) {
          // Pick new random connection for the packet
          const nodes_list = nodesRef.current
          const startNodeIndex = Math.floor(Math.random() * nodes_list.length)
          const nodeConnections = nodes_list[startNodeIndex].connections
          if (nodeConnections.length > 0) {
            packet.startNode = startNodeIndex
            packet.endNode =
              nodeConnections[
                Math.floor(Math.random() * nodeConnections.length)
              ]
            packet.progress = 0
          }
        }
      })

      // Remove old packet meshes
      scene.children.forEach((child) => {
        if (child instanceof THREE.Mesh && child.geometry === packetGeometry) {
          scene.remove(child)
        }
      })

      // Add and position data packets
      packetsRef.current.forEach((packet) => {
        const startPos = nodes[packet.startNode].position
        const endPos = nodes[packet.endNode].position
        const currentPos = new THREE.Vector3().lerpVectors(
          startPos,
          endPos,
          packet.progress
        )

        const mesh = new THREE.Mesh(packetGeometry, packetMaterial)
        mesh.position.copy(currentPos)
        scene.add(mesh)
      })

      // Add subtle camera rotation
      camera.position.x = Math.sin(Date.now() * 0.00003) * 50
      camera.position.y = Math.cos(Date.now() * 0.000025) * 50
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      containerRef.current?.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        opacity: 1,
      }}
    />
  )
}
