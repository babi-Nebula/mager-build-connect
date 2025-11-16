import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Floating construction boxes component
const FloatingBoxes = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Generate random positions for boxes
  const boxes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 25; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 0.3 + 0.1,
      });
    }
    return temp;
  }, []);

  // Animate the group rotation
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {boxes.map((box, i) => (
        <Float
          key={i}
          speed={box.speed}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh position={box.position} rotation={box.rotation} scale={box.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <MeshDistortMaterial
              color={i % 3 === 0 ? '#ea384c' : i % 3 === 1 ? '#ec4899' : '#9333ea'}
              speed={2}
              distort={0.3}
              radius={1}
              metalness={0.8}
              roughness={0.2}
              opacity={0.7}
              transparent
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

// Floating stones/debris component
const FloatingStones = () => {
  const groupRef = useRef<THREE.Group>(null);

  const stones = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 20; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ] as [number, number, number],
        scale: Math.random() * 0.4 + 0.2,
        speed: Math.random() * 0.4 + 0.2,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.03;
      groupRef.current.rotation.y = -state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {stones.map((stone, i) => (
        <Float
          key={i}
          speed={stone.speed}
          rotationIntensity={1}
          floatIntensity={1}
        >
          <mesh position={stone.position} rotation={stone.rotation} scale={stone.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#6366f1' : '#8b5cf6'}
              metalness={0.9}
              roughness={0.1}
              opacity={0.6}
              transparent
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 15], fov: 75 }}
        className="w-full h-full"
      >
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ec4899" />
        <pointLight position={[0, 0, 0]} intensity={1} color="#ea384c" />

        {/* Animated objects */}
        <FloatingBoxes />
        <FloatingStones />
      </Canvas>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 pointer-events-none"></div>
    </div>
  );
};

export default AnimatedBackground;
