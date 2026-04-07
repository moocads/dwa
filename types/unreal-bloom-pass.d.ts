import type { ThreeElement } from '@react-three/fiber'
import type { UnrealBloomPass } from 'three-stdlib'

type UnrealBloomPassJSX = ThreeElement<typeof UnrealBloomPass>

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: UnrealBloomPassJSX
    }
  }
}

declare module 'react/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: UnrealBloomPassJSX
    }
  }
}

declare module 'react/jsx-dev-runtime' {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: UnrealBloomPassJSX
    }
  }
}

export {}
