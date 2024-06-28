/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import '../App.css'

const Torus = ({ position, size, color }) => {
  const ref = useRef()
  useFrame((state, delta) => {
      // delta is difference in time between the current frame and the last frame
      ref.current.rotation.y += delta *9
      //you can check through console
      console.log(delta)
      console.log(state)
  })
  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size}/>
      {/* add wireframe to see the outline */}
      <meshStandardMaterial color={color} wireframe/>
    </mesh>
  )
}
const BasicTorus = () => { 
  return (
    <>
      <p>Basic torusGeometry, props size stand for args (radius/hole, tube, radialSegments/density, turbularSegments/side)</p>
      <Canvas>
        {/* lighting, has the same intensity to all the directions, so it doesnt show as 3D object */}
        <ambientLight intensity={1} />
        {/* light position, make it looks 3d */}
        <directionalLight position={[0, 0, 1]}/>

        {/* default value: radius=1, tube=0.4, radialSegments=12, turbularSegments=48. full of explanation available on the threejs web */}
        <Torus position={[0, 1, 0]}/>
        {/* passing value on props */}
        <Torus position={[0, -2, 0]} size={[1, 0.2, 3, 10]} color={"hotpink"}/> 
      </Canvas>
    </>
  )
}

export default BasicTorus
