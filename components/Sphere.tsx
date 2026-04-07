"use client"

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { OrbitControls, Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import * as THREE from 'three'

extend({ UnrealBloomPass })

const ParticleSwarm = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 20000

  const dummy  = useMemo(() => new THREE.Object3D(), [])
  const target = useMemo(() => new THREE.Vector3(), [])
  const pColor = useMemo(() => new THREE.Color(), [])

  // ── 配色 ──
  const palette = useMemo(() => ({
    orange: new THREE.Color('#E35806'),
    amber:  new THREE.Color('#FF9200'),
    purple: new THREE.Color('#643EC7'),
    pink:   new THREE.Color('#E35806'),
  }), [])

  const positions = useMemo(() => {
    const pos: THREE.Vector3[] = []
    for (let i = 0; i < count; i++)
      pos.push(new THREE.Vector3(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
      ))
    return pos
  }, [])

  // ── 换成 SphereGeometry ──
  const geometry = useMemo(() => new THREE.SphereGeometry(0.28, 6, 6), [])
  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffff }), [])

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.getElapsedTime()

    for (let i = 0; i < count; i++) {
      const t = i / count

      // ── USER CODE（原始球形分布，保持不变）──
      const r     = 30
      const phi   = Math.acos(-1 + (2 * i) / count)
      const theta = Math.sqrt(count * Math.PI) * phi
      target.set(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi),
      )

      // ── 配色逻辑 ──
      const len        = target.length()
      const radial     = Math.min(1.0, len / (r * 1.42))
      const radialEase = Math.pow(radial, 0.75)

      // 1. 橙色基底
      pColor.copy(palette.orange)

      // 2. 外缘 → amber 提亮（最多 55%）
      const edgeMix = Math.pow(Math.max(0, radial - 0.65) / 0.35, 1.5) * 0.55
      pColor.lerp(palette.amber, edgeMix)

   

   
      // 5. spark 高光
      const spark = Math.sin(t * 1000.0 + time * 5.0) > 0.97 ? 1.0 : 0.0
      if (spark > 0) pColor.lerp(palette.pink, 0.55)

      // 6. 整体亮度
      const activity   = Math.sin(time * 2.0 + t * 30.0) * 0.5 + 0.5
      const brightness =
        0.55 +
        radialEase * 0.45 +
        spark      * 0.25 +
        activity   * 0.04
      pColor.multiplyScalar(brightness)

      // ── UPDATE（原始逻辑，保持不变）──
      positions[i].lerp(target, 0.1)
      dummy.position.copy(positions[i])
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
      meshRef.current.setColorAt(i, pColor)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
    if (meshRef.current.instanceColor)
      meshRef.current.instanceColor.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[geometry, material, count]} />
  )
}

export default function BrainOrb() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 100], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <fog attach="fog" args={['#000000', 0.01]} />
        <ParticleSwarm />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.4}
          enableZoom={false}
          enablePan={false}
        />
        <Effects disableGamma>
          <unrealBloomPass
            args={[new THREE.Vector2(256, 256), 1.8, 0.4, 1]}
          />
        </Effects>
      </Canvas>
    </div>
  )
}