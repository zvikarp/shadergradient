# shadergradient

Customizable 3D, moving gradient package for React.

## Installation

```sh
# with npm
npm install shadergradient @react-three/fiber three

# with yarn
yarn add shadergradient @react-three/fiber three

# with pnpm
pnpm add shadergradient @react-three/fiber three
```

## React Version Compatibility

This package requires specific versions of `@react-three/fiber` depending on your React version:

| React Version | @react-three/fiber Version | Installation Command |
|---------------|---------------------------|----------------------|
| React 18.x    | ^8.0.0                    | `npm install @react-three/fiber@^8.0.0` |
| React 19.x    | ^9.0.0                    | `npm install @react-three/fiber@^9.0.0` |

**Important for React 19 users:** If you're using React 19, you **must** install `@react-three/fiber` version 9 or higher. Version 8 is not compatible with React 19 due to changes in React's internal APIs.

## Usage

```tsx
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

function App() {
  return (
    <ShaderGradientCanvas
      importedFiber={{ ...fiber, ...drei, ...reactSpring }}
    >
      <ShaderGradient cDistance={32} cPolarAngle={125} />
    </ShaderGradientCanvas>
  )
}
```

For more documentation and examples, see the main [repository README](https://github.com/ruucm/shadergradient).

## Troubleshooting

### React 19 Compatibility Issues

If you encounter errors like:
- `Cannot read properties of undefined (reading 'ReactCurrentOwner')`
- `Cannot read properties of undefined (reading 'ReactCurrentBatchConfig')`
- UI freezing or crashes

Make sure you have installed `@react-three/fiber` version 9 or higher:

```sh
npm install @react-three/fiber@^9.0.0
```

### Version Checking

You can check your installed versions with:

```sh
npm list react @react-three/fiber
```

## License

MIT © [ruucm](https://github.com/ruucm)
