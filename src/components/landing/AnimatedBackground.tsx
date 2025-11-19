import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

/* --------------------------------------------------------
   BIGGER, BRIGHTER FLOATING BOXES
-------------------------------------------------------- */
const FloatingBoxes = ({ isDark }: { isDark: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  const boxes = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 25; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 18,
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ] as [number, number, number],
        scale: Math.random() * 1 + 0.8, // bigger
        speed: Math.random() * 0.4 + 0.2,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {boxes.map((box, i) => (
        <Float key={i} speed={box.speed} rotationIntensity={1} floatIntensity={1.5}>
          <mesh position={box.position} rotation={box.rotation} scale={box.scale}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <MeshDistortMaterial
              color={isDark ? (i % 3 === 0 ? "#ff4d6d" : i % 3 === 1 ? "#f472b6" : "#a855f7") : (i % 3 === 0 ? "#a855f7" : i % 3 === 1 ? "#06b6d4" : "#f472b6")}
              emissive={isDark ? (i % 3 === 0 ? "#ff1e4d" : i % 3 === 1 ? "#ff4da6" : "#7b2cbf") : (i % 3 === 0 ? "#7c3aed" : i % 3 === 1 ? "#0891b2" : "#ec4899")}
              emissiveIntensity={isDark ? 0.9 : 0.6}
              speed={2}
              distort={0.25}
              metalness={1}
              roughness={0.1}
              transparent
              opacity={isDark ? 0.9 : 0.7}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

/* --------------------------------------------------------
   BIGGER FLOATING STONES / DEBRIS
-------------------------------------------------------- */
const FloatingStones = ({ isDark }: { isDark: boolean }) => {
  const groupRef = useRef<THREE.Group>(null);

  const stones = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 20; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ] as [number, number, number],
        scale: Math.random() * 0.9 + 0.5, // larger
        speed: Math.random() * 0.5 + 0.3,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.04;
      groupRef.current.rotation.y = -state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {stones.map((stone, i) => (
        <Float key={i} speed={stone.speed} rotationIntensity={1.5} floatIntensity={1.5}>
          <mesh position={stone.position} rotation={stone.rotation} scale={stone.scale}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={isDark ? (i % 2 === 0 ? "#818cf8" : "#a78bfa") : (i % 2 === 0 ? "#06b6d4" : "#8b5cf6")}
              emissive={isDark ? (i % 2 === 0 ? "#6366f1" : "#8b5cf6") : (i % 2 === 0 ? "#0891b2" : "#7c3aed")}
              emissiveIntensity={isDark ? 1 : 0.6}
              metalness={0.9}
              roughness={0.1}
              transparent
              opacity={isDark ? 0.85 : 0.65}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};

/* --------------------------------------------------------
   MAIN BACKGROUND COMPONENT
-------------------------------------------------------- */
const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme === "dark" : true;

  return (
    <div className="absolute inset-0 w-full h-full transition-all duration-500">
      {/* STATIC CONSTRUCTION BACKGROUND IMAGE */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${isDark ? 'opacity-40' : 'opacity-20'}`}
        style={{ backgroundImage: "url('/images/construction-dark.jpg')" }}
      ></div>

      <Canvas camera={{ position: [0, 0, 10], fov: 60 }} className="w-full h-full">
        {/* Lighting */}
        <ambientLight intensity={isDark ? 0.7 : 1.2} />
        <directionalLight position={[10, 10, 5]} intensity={isDark ? 1.2 : 0.8} color="#ffffff" />
        <pointLight position={[0, 0, 0]} intensity={isDark ? 1.5 : 0.8} color={isDark ? "#ff4d6d" : "#a855f7"} />

        {/* Particles (very visible) */}
        <Sparkles count={150} speed={1.5} size={6} opacity={isDark ? 0.5 : 0.3} color={isDark ? "#ffffff" : "#a855f7"} />

        {/* Animated Objects */}
        <FloatingBoxes isDark={isDark} />
        <FloatingStones isDark={isDark} />
      </Canvas>

      {/* Softer Gradient Overlay */}
      <div className={`absolute inset-0 pointer-events-none transition-all duration-500 ${isDark ? 'bg-gradient-to-b from-black/30 via-black/20 to-black/40' : 'bg-gradient-to-b from-white/20 via-transparent to-white/10'}`}></div>
    </div>
  );
};

export default AnimatedBackground;
