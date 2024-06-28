/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
// similar to useFrame, but make it easier and shorter
import { MeshWobbleMaterial, OrbitControls, useHelper } from '@react-three/drei'
// helper to see where the direction of light to the object
import { DirectionalLightHelper } from 'three'
import '../App.css'

const TorusKnot = ({ position, size}) => {
  const directionalLightRef = useRef();
  //using directional light helper, to see where does the light come from
  useHelper(directionalLightRef, DirectionalLightHelper, 1, "white")

  return (
    <mesh 
      position={position} 
      >
      <torusKnotGeometry args={size}/>
      {/* FROM FIBER */}
      {/* <meshStandardMaterial 
        color={color}
        wireframe
      /> */}
      {/* FROM DREI, YOU MAY ADD COLOR ON IT */}
      <MeshWobbleMaterial factor={1} speed={1} color={"gold"} wireframe/>
      {/* lighting, has the same intensity to all the directions, so it doesnt show as 3D object */}
      <ambientLight intensity={1} />
      {/* light position, make it looks 3d */}
      <directionalLight position={[0.5, 2.5, -1]} intensity={1} ref={directionalLightRef}/>

      {/* NB: MESH FROM FIBER AND DREI CAN'T BE PUT TOGETHER */}
    </mesh>
  )
}
const BasicScene = () => { 
  return (
    <>
      <p>Add Directional Light Helper</p>
      <Canvas>
        {/* default value: radius=1, widhtSegments=32, heightSegments=16. full of explanation available on the threejs web */}
        <TorusKnot color={"gold"} size={[1, 0.3, 80, 50]}/> {/*NB: the center one doesnt change color after unhover because it's using default color */}

        <OrbitControls enableZoom={false} autoRotate={true}/>
      </Canvas>
    </>
  )
}

export default BasicScene
