/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import './App.css'

const Cube = ({ position, size, color }) => {
  return (
    <mesh position={position}>
    <boxGeometry args={size}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )
}
const App = () => { 
  return (
    <Canvas>
      {/* lighting, has the same intensity to all the directions, so it doesnt show as 3D object */}
      <ambientLight intensity={1} />
      {/* light position, make it looks 3d */}
      <directionalLight position={[0, 0, 1]}/>
      
      {/* allows us to change the direction of all cubes */}
      <group position={[0, 0, 0]}>
        {/* create cube manually  */}
        <mesh position={[2, -1, 1]}>
          {/* this is gonna be displayed as a black cube if you dont add ambientlight to it */}
          <boxGeometry />
          {/* to add color */}
          <meshStandardMaterial color={"hotpink"}/>
        </mesh>

        {/* create cube using component  */}
        <Cube position={[-2, 1, 1]} color={"yellow"} size={[1,1,1]} />
      </group>
    </Canvas>
  )
}

export default App
