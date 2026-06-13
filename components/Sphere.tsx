"use client"

import { useRef, useMemo, useState, useEffect, useLayoutEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// ── 配色（橘色）─────────────────────────────────────────────────
const PALETTE = {
  core:   new THREE.Color('#000000'), // 与页面纯黑背景一致
  ocean:  new THREE.Color('#5a2206'), // 海洋点略压暗，减少整体泛红
  land:   new THREE.Color('#E35806'),
  hot:    new THREE.Color('#FF9A3D'),
  glow:   new THREE.Color('#FF6A00'),
}

const GLOBE_R = 26
const MAP_SRC = '/images/earth-water.png' // 等距圆柱投影：陆地=暗，海洋=白

type GlobeData = {
  positions: Float32Array
  colors: Float32Array
  scales: Float32Array
  count: number
  landPos: THREE.Vector3[]
}

// ─────────────────────────────────────────────────────────────────
// 点状世界地图地球
// ─────────────────────────────────────────────────────────────────
const DottedGlobe = () => {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const sparkRef = useRef<THREE.InstancedMesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const [data, setData] = useState<GlobeData | null>(null)

  const dummy = useMemo(() => new THREE.Object3D(), [])
  const tmpColor = useMemo(() => new THREE.Color(), [])
  const dotGeo = useMemo(() => new THREE.SphereGeometry(0.26, 6, 6), [])
  const dotMat = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xffffff }), [])
  const sparkMat = useMemo(
    () => new THREE.MeshBasicMaterial({ color: PALETTE.hot }),
    [],
  )

  // 读取地图像素 → 生成点阵
  useEffect(() => {
    let cancelled = false
    const img = new Image()
    img.src = MAP_SRC
    img.onload = () => {
      if (cancelled) return
      const cw = 640
      const ch = 320
      const cv = document.createElement('canvas')
      cv.width = cw
      cv.height = ch
      const ctx = cv.getContext('2d', { willReadFrequently: true })
      if (!ctx) return
      ctx.drawImage(img, 0, 0, cw, ch)
      const px = ctx.getImageData(0, 0, cw, ch).data

      const sampleLand = (latDeg: number, lonDeg: number) => {
        // 经度做水平镜像（1 - u），修正左右翻转
        const u = 1 - ((lonDeg + 360) % 360) / 360
        const v = (90 - latDeg) / 180
        const x = Math.min(cw - 1, Math.max(0, Math.floor(u * cw)))
        const y = Math.min(ch - 1, Math.max(0, Math.floor(v * ch)))
        const lum = px[(y * cw + x) * 4] // 灰度（取 R 即可）
        return lum < 128 // 暗 = 陆地
      }

      const positions: number[] = []
      const colors: number[] = []
      const scales: number[] = []
      const landPos: THREE.Vector3[] = []

      const latStep = 1.4 // 纬线间隔（度）→ 地图清晰度
      for (let lat = -89; lat <= 89; lat += latStep) {
        const phi = (lat * Math.PI) / 180
        const ring = Math.cos(phi)
        const num = Math.max(1, Math.round(ring * 250)) // 每条纬线点数
        for (let j = 0; j < num; j++) {
          const lonDeg = (j / num) * 360
          const lon = (lonDeg * Math.PI) / 180
          const isLand = sampleLand(lat, lonDeg)

          // 海洋只保留稀疏网格点，让陆地更突出
          if (!isLand && j % 2 !== 0) continue

          const x = GLOBE_R * ring * Math.cos(lon)
          const y = GLOBE_R * Math.sin(phi)
          const z = GLOBE_R * ring * Math.sin(lon)
          positions.push(x, y, z)

          if (isLand) {
            // 陆地：主橘 → 赤道附近略偏亮琥珀
            const equator = 1 - Math.abs(Math.sin(phi))
            tmpColor.copy(PALETTE.land).lerp(PALETTE.hot, Math.pow(equator, 1.6) * 0.5)
            colors.push(tmpColor.r, tmpColor.g, tmpColor.b)
            scales.push(1.0)
            landPos.push(new THREE.Vector3(x, y, z))
          } else {
            colors.push(PALETTE.ocean.r, PALETTE.ocean.g, PALETTE.ocean.b)
            scales.push(0.62)
          }
        }
      }

      setData({
        positions: new Float32Array(positions),
        colors: new Float32Array(colors),
        scales: new Float32Array(scales),
        count: scales.length,
        landPos,
      })
    }
    return () => {
      cancelled = true
    }
  }, [tmpColor])

  // 写入实例矩阵 / 颜色（一次）
  useLayoutEffect(() => {
    const mesh = meshRef.current
    if (!mesh || !data) return
    for (let i = 0; i < data.count; i++) {
      dummy.position.set(
        data.positions[i * 3],
        data.positions[i * 3 + 1],
        data.positions[i * 3 + 2],
      )
      dummy.scale.setScalar(data.scales[i])
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
      tmpColor.setRGB(
        data.colors[i * 3],
        data.colors[i * 3 + 1],
        data.colors[i * 3 + 2],
      )
      mesh.setColorAt(i, tmpColor)
    }
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [data, dummy, tmpColor])

  // 闪烁点：随机陆地点位
  const sparks = useMemo(() => {
    if (!data) return [] as THREE.Vector3[]
    const out: THREE.Vector3[] = []
    const n = Math.min(220, data.landPos.length)
    for (let i = 0; i < n; i++) {
      out.push(data.landPos[Math.floor(Math.random() * data.landPos.length)])
    }
    return out
  }, [data])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (groupRef.current) groupRef.current.rotation.y = time * 0.07

    const spark = sparkRef.current
    if (spark && sparks.length) {
      for (let i = 0; i < sparks.length; i++) {
        const p = sparks[i]
        const pulse = Math.sin(time * 2.5 + i * 1.7) * 0.5 + 0.5
        dummy.position.copy(p).multiplyScalar(1.004)
        dummy.scale.setScalar(0.5 + pulse * 1.5)
        dummy.updateMatrix()
        spark.setMatrixAt(i, dummy.matrix)
      }
      spark.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef}>
      {/* 球体本体：遮住背面点，读作实心地球 */}
      <mesh>
        <sphereGeometry args={[GLOBE_R * 0.99, 64, 64]} />
        <meshBasicMaterial color={PALETTE.core} />
      </mesh>

      {/* 点状地图 */}
      {data && (
        <instancedMesh
          key={data.count}
          ref={meshRef}
          args={[dotGeo, dotMat, data.count]}
        />
      )}

      {/* 陆地闪烁高光 */}
      {data && sparks.length > 0 && (
        <instancedMesh
          key={`spark-${sparks.length}`}
          ref={sparkRef}
          args={[dotGeo, sparkMat, sparks.length]}
        />
      )}

      {/* 大气辉光 — 内外两层，自然扩散 */}
      <mesh>
        <sphereGeometry args={[GLOBE_R * 1.16, 48, 48]} />
        <meshBasicMaterial
          color={PALETTE.glow}
          transparent
          opacity={0.09}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[GLOBE_R * 1.55, 32, 32]} />
        <meshBasicMaterial
          color={PALETTE.glow}
          transparent
          opacity={0.03}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  )
}

// ─────────────────────────────────────────────────────────────────
// 轨道：环线 + 在环上滑动的发光点
// ─────────────────────────────────────────────────────────────────
type OrbitProps = {
  radius: number
  tilt: [number, number, number]
  spin: number
  satellites: number
  satSpeed: number
  color: THREE.Color
}

const Orbit = ({ radius, tilt, spin, satellites, satSpeed, color }: OrbitProps) => {
  const groupRef = useRef<THREE.Group>(null)
  const satsRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const { tubeGeo, glowTubeGeo } = useMemo(() => {
    const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2, false, 0)
    const path = new THREE.CatmullRomCurve3(
      curve.getPoints(200).map((p) => new THREE.Vector3(p.x, p.y, 0)),
      true,
    )
    return {
      tubeGeo: new THREE.TubeGeometry(path, 200, 0.13, 10, true),
      glowTubeGeo: new THREE.TubeGeometry(path, 200, 0.32, 10, true),
    }
  }, [radius])

  const satGeo = useMemo(() => new THREE.SphereGeometry(0.62, 12, 12), [])
  const satMat = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: PALETTE.hot,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    [],
  )
  const phases = useMemo(
    () => Array.from({ length: satellites }, (_, i) => (i / satellites) * Math.PI * 2),
    [satellites],
  )

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    if (groupRef.current) groupRef.current.rotation.z = time * spin
    const sats = satsRef.current
    if (sats) {
      for (let i = 0; i < satellites; i++) {
        const a = phases[i] + time * satSpeed
        dummy.position.set(Math.cos(a) * radius, Math.sin(a) * radius, 0)
        const pulse = 0.85 + (Math.sin(time * 3 + i) * 0.5 + 0.5) * 0.55
        dummy.scale.setScalar(pulse)
        dummy.updateMatrix()
        sats.setMatrixAt(i, dummy.matrix)
      }
      sats.instanceMatrix.needsUpdate = true
    }
  })

  return (
    <group ref={groupRef} rotation={tilt}>
      {/* 外层柔光 */}
      <mesh geometry={glowTubeGeo}>
        <meshBasicMaterial
          color={PALETTE.glow}
          transparent
          opacity={0.14}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {/* 主轨道 */}
      <mesh geometry={tubeGeo}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.62}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <instancedMesh ref={satsRef} args={[satGeo, satMat, satellites]} />
    </group>
  )
}

const OrbitSystem = () => {
  const orbits: OrbitProps[] = useMemo(
    () => [
      { radius: 34, tilt: [1.3, 0.2, 0.4], spin: 0.18, satellites: 3, satSpeed: 0.6, color: PALETTE.land },
      { radius: 40, tilt: [0.5, 1.1, 0.0], spin: -0.12, satellites: 2, satSpeed: -0.45, color: PALETTE.land },
      { radius: 46, tilt: [1.9, 0.6, 0.9], spin: 0.09, satellites: 4, satSpeed: 0.35, color: PALETTE.land },
    ],
    [],
  )
  return (
    <>
      {orbits.map((o, i) => (
        <Orbit key={i} {...o} />
      ))}
    </>
  )
}

export default function Sphere() {
  return (
    <div
      className="relative w-full overflow-visible"
      style={{
        maskImage:
          "radial-gradient(ellipse 78% 72% at 50% 50%, #000 38%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 78% 72% at 50% 50%, #000 38%, transparent 100%)",
      }}
    >
      <div className="relative h-[clamp(380px,58vh,560px)] w-full max-h-[560px] overflow-visible">
        <Canvas
          camera={{ position: [0, 5, 108], fov: 58 }}
          className="!h-full !w-full"
          style={{ background: "transparent", overflow: "visible" }}
          gl={{
            antialias: true,
            alpha: true,
            premultipliedAlpha: false,
          }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0)
          }}
        >
          <DottedGlobe />
          <OrbitSystem />
          <OrbitControls
            autoRotate
            autoRotateSpeed={0.35}
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={(Math.PI * 2) / 3}
          />
        </Canvas>
      </div>
    </div>
  )
}
