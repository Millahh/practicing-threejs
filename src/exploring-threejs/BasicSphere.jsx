/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import '../App.css'

const Sphere = ({ position, size, color }) => {
  const ref = useRef()
  // define state for hover
  const [isHovered, setIsHovered] = useState(false);
  // define state when clicked
  const [isClicked, setIsClicked] = useState(false);
  useFrame((state, delta) => {
      // check if sphere hover
      const speed = isHovered&&!isClicked ? 1 : 0.5;
      // delta is difference in time between the current frame and the last frame
      ref.current.rotation.y += delta * speed
      //you can check through console
      console.log(delta)
      console.log(state)
  })
  return (
    <mesh 
      position={position} 
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
      >
      <sphereGeometry args={size}/>
      {/* add wireframe to see the outline */}
      <meshStandardMaterial 
        color={isHovered ? "blue": color}
        wireframe
      />
    </mesh>
  )
}
const BasicSphere = () => { 
  return (
    <>
      <p>Basic sphereGeometry, props size stand for args (size, widhtSegments, heightSegments)</p>
      <p>Interactive hover and click 3d object</p>
      <Canvas>
        {/* lighting, has the same intensity to all the directions, so it doesnt show as 3D object */}
        <ambientLight intensity={1} />
        {/* light position, make it looks 3d */}
        <directionalLight position={[0, 0, 1]}/>

        {/* default value: radius=1, widhtSegments=32, heightSegments=16. full of explanation available on the threejs web */}
        <Sphere /> {/*NB: the center one doesnt change color after unhover because it's using default color */}
        <Sphere position={[5, 0, 0]} color={"yellow"}/>
        {/* passing value on props */}
        <Sphere position={[-5, 0, 0]} size={[0.8, 20, 5]} color={"hotpink"}/> 
      </Canvas>
    </>
  )
}

export default BasicSphere
