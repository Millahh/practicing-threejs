/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber'
// similar to useFrame, but make it easier and shorter
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei'
import '../App.css'

const TorusKnot = ({ position, size}) => {
//   const ref = useRef()
//   const [isHovered, setIsHovered] = useState(false);
//   const [isClicked, setIsClicked] = useState(false);

  //useFrame can be replaced by adding OrbitControls, it'll make code shorter

  // useFrame((state, delta) => {
  //     // check if sphere hover
  //     const speed = isHovered&&!isClicked ? 1 : 0.5;
  //     // delta is difference in time between the current frame and the last frame
  //     ref.current.rotation.y += delta * speed
  //     //you can check through console
  //     console.log(delta)
  //     console.log(state)
  // })
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
      {/* FROM DREI */}
      <MeshWobbleMaterial factor={1} speed={1} wireframe/>

      {/* NB: MESH FROM FIBER AND DREI CAN'T BE PUT TOGETHER */}
    </mesh>
  )
}
const BasicOrbitControl = () => { 
  return (
    <>
      <p>Basic sphereGeometry, but now we try add OrbitControls</p>
      <Canvas>
        {/* lighting, has the same intensity to all the directions, so it doesnt show as 3D object */}
        <ambientLight intensity={1} />
        {/* light position, make it looks 3d */}
        <directionalLight position={[0, 0, 1]}/>

        {/* default value: radius=1, widhtSegments=32, heightSegments=16. full of explanation available on the threejs web */}
        <TorusKnot color={"gold"} size={[1.5, 0.1, 50, 10]}/> {/*NB: the center one doesnt change color after unhover because it's using default color */}

        <OrbitControls enableZoom={false} autoRotate={true}/>
      </Canvas>
    </>
  )
}

export default BasicOrbitControl
