import { CameraControls } from "@react-three/drei";

const Experience = () => {
  return (
    <>
      <CameraControls></CameraControls>
      <mesh>
        <boxGeometry></boxGeometry>
        <meshStandardMaterial color={0xffffff}></meshStandardMaterial>
      </mesh>
      <directionalLight></directionalLight>
      <ambientLight></ambientLight>
    </>
  );
};

export default Experience;
