"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function HeroGrid() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const W = mount.clientWidth
    const H = mount.clientHeight

    // ── Renderer ──
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(W, H)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mount.appendChild(renderer.domElement)

    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 1000)
    camera.position.set(0, 60, 140)
    camera.lookAt(0, -10, 0)

    const SEG_X  = 80
    const SEG_Z  = 60
    const SIZE_X = 320
    const SIZE_Z = 240

    // ── 用 BufferGeometry 手动建线段，避免 WireframeGeometry 重建问题 ──
    const plane = new THREE.PlaneGeometry(SIZE_X, SIZE_Z, SEG_X, SEG_Z)
    plane.rotateX(-Math.PI / 2)
    const planePos = plane.attributes.position

    // 收集网格线的顶点对（横线 + 竖线）
    const lineVerts: number[] = []
    const lineColors: number[] = []

    // #FFFFFF = 1.0, 1.0, 1.0  ← 在这里改颜色
    const R = 0.2
    const G = 0.2
    const B = 0.2

    const getColor = (x: number, z: number) => {
      const dist = Math.sqrt((x / (SIZE_X * 0.5)) ** 2 + (z / (SIZE_Z * 0.5)) ** 2)
      return Math.max(0, 1 - dist * 0.85)
    }

    // 横线：每行 SEG_X 条线段
for (let row = 0; row <= SEG_Z; row++) {
  for (let col = 0; col < SEG_X; col++) {
    const i0 = row * (SEG_X + 1) + col
    const i1 = i0 + 1
    const x0 = planePos.getX(i0), y0 = planePos.getY(i0), z0 = planePos.getZ(i0)
    const x1 = planePos.getX(i1), y1 = planePos.getY(i1), z1 = planePos.getZ(i1)
    lineVerts.push(x0, y0, z0, x1, y1, z1)
    const b0 = getColor(x0, z0), b1 = getColor(x1, z1)
    lineColors.push(R*b0, G*b0, B*b0, R*b1, G*b1, B*b1)
  }
}

// 竖线：每列 SEG_Z 条线段
for (let col = 0; col <= SEG_X; col++) {
  for (let row = 0; row < SEG_Z; row++) {
    const i0 = row * (SEG_X + 1) + col
    const i1 = i0 + (SEG_X + 1)
    const x0 = planePos.getX(i0), y0 = planePos.getY(i0), z0 = planePos.getZ(i0)
    const x1 = planePos.getX(i1), y1 = planePos.getY(i1), z1 = planePos.getZ(i1)
    lineVerts.push(x0, y0, z0, x1, y1, z1)
    const b0 = getColor(x0, z0), b1 = getColor(x1, z1)
    lineColors.push(R*b0, G*b0, B*b0, R*b1, G*b1, B*b1)
  }
}

// ← 新增：对角线，把每个 square 切成两个 triangle
for (let row = 0; row < SEG_Z; row++) {
  for (let col = 0; col < SEG_X; col++) {
    // 左上角顶点 → 右下角顶点
    const i0 = row * (SEG_X + 1) + col           // 左上
    const i1 = (row + 1) * (SEG_X + 1) + col + 1 // 右下
    const x0 = planePos.getX(i0), y0 = planePos.getY(i0), z0 = planePos.getZ(i0)
    const x1 = planePos.getX(i1), y1 = planePos.getY(i1), z1 = planePos.getZ(i1)
    lineVerts.push(x0, y0, z0, x1, y1, z1)
    const b0 = getColor(x0, z0), b1 = getColor(x1, z1)
    lineColors.push(R*b0, G*b0, B*b0, R*b1, G*b1, B*b1)
  }
}
    const totalVerts = lineVerts.length / 3
    const posArr = new Float32Array(lineVerts)
    const colArr = new Float32Array(lineColors)

    const geo = new THREE.BufferGeometry()
    // position 设为 dynamic，每帧更新 Y 值
    const posAttr = new THREE.BufferAttribute(posArr, 3)
    posAttr.setUsage(THREE.DynamicDrawUsage)
    geo.setAttribute("position", posAttr)
    geo.setAttribute("color", new THREE.BufferAttribute(colArr, 3))

    const mat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
    })

    const lines = new THREE.LineSegments(geo, mat)
    scene.add(lines)

    plane.dispose()

    // ── 动画：只更新 Y，不重建 geometry ──
    const clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      const pos = geo.attributes.position as THREE.BufferAttribute

      for (let i = 0; i < totalVerts; i++) {
        const x = posArr[i * 3]
        const z = posArr[i * 3 + 2]
        const wave =
          Math.sin(x * 0.025 + t * 0.5)             * 12 +
          Math.sin(z * 0.030 + t * 0.4)             * 8  +
          Math.sin((x + z) * 0.018 + t * 0.3)       * 6  +
          Math.sin(x * 0.045 - z * 0.02 + t * 0.7)  * 4
        pos.setY(i, wave)
      }
      pos.needsUpdate = true

    //   lines.position.z = (t * 8) % (SIZE_Z / SEG_Z)
    lines.position.z = Math.sin(t * 0.3) * 3
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    window.addEventListener("resize", onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", onResize)
      geo.dispose()
      mat.dispose()
      renderer.dispose()
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  )
}