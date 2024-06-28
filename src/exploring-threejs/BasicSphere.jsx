/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import '../App.css'

const Sphere = ({ position, size, color }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={size}/>
      {/* add wireframe to see the outline */}
      <meshStandardMaterial color={color} wireframe/>
    </mesh>
  )
}
const BasicSphere = () => { 
  return (
    <>
      <p>Basic sphereGeometry, props size stand for args (size, widhtSegments, heightSegments)</p>
      <Canvas>
        {/* lighting, has the same intensity to all the directions, so it doesnt show as 3D object */}
        <ambientLight intensity={1} />
        {/* light position, make it looks 3d */}
        <directionalLight position={[0, 0, 1]}/>

        {/* default value: radius=1, widhtSegments=32, heightSegments=16. full of explanation available on the threejs web */}
        <Sphere />
        {/* passing value on props */}
        <Sphere position={[0, -2.5, 0]} size={[0.8, 10, 5]} color={"hotpink"}/> 
      </Canvas>
    </>
  )
}

export default BasicSphere
