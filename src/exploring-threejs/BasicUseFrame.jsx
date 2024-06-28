/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import '../App.css'

const Cube = ({ position, size, color }) => {
  const ref = useRef()

  useFrame((state, delta) => {
    // delta is difference in time between the current frame and the last frame
    ref.current.rotation.x += delta
    // ref.current.rotation.y += delta * 100
    // move the cube
    //ref.current.position.z += delta -> this is make the cube out of camera
    // instead, using Math.sin make it moving waves forward then back again
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2
    //you can check through console
    console.log(delta)
    console.log(state)
  })

  return (
    // pass the ref in properties
    <mesh position={position} ref={ref}>
    <boxGeometry args={size}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )
}
const BasicUseFrame = () => { 
  return (
    <>
      <p>Basic useFrame(): using rotation x, y, z, Math.sin</p>
      <Canvas>
        {/* lighting, has the same intensity to all the directions, so it doesnt show as 3D object */}
        <ambientLight intensity={1} />
        {/* light position, make it looks 3d */}
        <directionalLight position={[0, 0, 1]}/>
        
        <Cube position={[0, 0, 0]} color={"yellow"} size={[1,1,1]} />
        
      </Canvas>
    </>
  )
}

export default BasicUseFrame
