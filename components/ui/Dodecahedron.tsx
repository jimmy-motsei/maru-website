'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface DodecahedronProps {
  className?: string
}

export default function Dodecahedron({ className }: DodecahedronProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    // Renderer — transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(480, 480)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.style.width  = '480px'
    renderer.domElement.style.height = '480px'
    renderer.domElement.style.display = 'block'
    mount.appendChild(renderer.domElement)

    // Scene + camera
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.z = 7

    // Wireframe — edges only, brand cyan
    const geometry = new THREE.DodecahedronGeometry(2.8, 0)
    const edges    = new THREE.EdgesGeometry(geometry)
    const material = new THREE.LineBasicMaterial({
      color:     0x3DB8C6,
      linewidth: 1.5,
    })
    const wireframe = new THREE.LineSegments(edges, material)
    scene.add(wireframe)

    // Animation loop
    let frameId: number
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      wireframe.rotation.y += 0.003
      wireframe.rotation.x += 0.001
      renderer.render(scene, camera)
    }
    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId)
      renderer.dispose()
      geometry.dispose()
      edges.dispose()
      material.dispose()
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={className}
      style={{ width: '480px', height: '480px', flexShrink: 0 }}
    />
  )
}
