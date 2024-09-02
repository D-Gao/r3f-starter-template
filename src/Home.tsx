import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import Experience from "./Experience";

const Home = () => {
  return (
    <>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [0, 0, 5], fov: 42 }}
      >
        <color attach="background" args={["#171720"]} />
        {/* <fog attach="fog" args={["#171720", 10, 32]} /> */}
        <Suspense fallback={null}>
          <Experience></Experience>
        </Suspense>
      </Canvas>

      <Loader />
    </>
  );
};

export default Home;
