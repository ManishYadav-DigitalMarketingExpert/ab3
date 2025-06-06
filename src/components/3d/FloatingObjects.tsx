import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const FloatingCube = ({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" transparent opacity={0.8} />
    </mesh>
  );
};

export const FloatingSphere = ({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y =
        position[1] + Math.cos(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#8b5cf6" transparent opacity={0.7} />
    </mesh>
  );
};

export const FloatingTorus = ({
  position,
  scale = 1,
}: {
  position: [number, number, number];
  scale?: number;
}) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.6;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.4;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[0.8, 0.3, 16, 100]} />
      <meshStandardMaterial color="#ef4444" transparent opacity={0.8} />
    </mesh>
  );
};
