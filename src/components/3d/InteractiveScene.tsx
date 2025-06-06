import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import { FloatingCube, FloatingSphere, FloatingTorus } from "./FloatingObjects";

export const InteractiveScene = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#8b5cf6"
        />

        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <FloatingCube position={[-3, 2, 0]} scale={0.8} />
        </Float>

        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
          <FloatingSphere position={[3, -1, -2]} scale={1.2} />
        </Float>

        <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.8}>
          <FloatingTorus position={[0, -2, -1]} scale={1} />
        </Float>

        <Float speed={1.2} rotationIntensity={1.2} floatIntensity={1}>
          <FloatingCube position={[4, 1, 1]} scale={0.6} />
        </Float>

        <Float speed={2.2} rotationIntensity={0.9} floatIntensity={2.2}>
          <FloatingSphere position={[-2, -1, 2]} scale={0.8} />
        </Float>

        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};
