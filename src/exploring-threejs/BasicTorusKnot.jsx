/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import '../App.css'

const TorusKnot = ({ position, size, color }) => {
    const ref = useRef()
    useFrame((state, delta) => {
        // delta is difference in time between the current frame and the last frame
        ref.current.rotation.y += delta
        //you can check through console
        console.log(delta)
        console.log(state)
    })
    return (
        <mesh position={position} ref={ref}>
        <torusKnotGeometry args={size}/>
        {/* add wireframe to see the outline */}
        <meshStandardMaterial color={color} wireframe/>
        </mesh>
    )
}
const BasicTorusKnot = () => { 
  return (
    <>
      <p>Basic torusKnotGeometry, props size stand for args (radius/hole, tube, turbularSegments/side, radialSegments/density)</p>
      <Canvas>
        {/* lighting, has the same intensity to all the directions, so it doesnt show as 3D object */}
        <ambientLight intensity={1} />
        {/* light position, make it looks 3d */}
        <directionalLight position={[0, 0, 1]}/>

        {/* default value */}
        <TorusKnot position={[3, 0, 0]}/>
        {/* passing value on props */}
        <TorusKnot position={[-3, 0, 0]} size={[2, 0.1, 5, 10]} color={"hotpink"}/> 
      </Canvas>
    </>
  )
}

export default BasicTorusKnot
