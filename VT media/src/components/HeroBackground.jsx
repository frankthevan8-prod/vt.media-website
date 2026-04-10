import { MeshGradient } from '@paper-design/shaders-react'

export default function HeroBackground() {
  return (
    <MeshGradient
      colors={["#000000", "#111111", "#1a1a1a", "#2a2a2a"]}
      speed={0.3}
      wireframe
      backgroundColor="#080808"
      maxPixelCount={921600}
      webGlContextAttributes={{ powerPreference: 'low-power' }}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1,
        pointerEvents: 'none',
      }}
    />
  )
}
