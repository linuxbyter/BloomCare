"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingParticles({ count = 80 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const particlesRef = useRef<Array<{
    position: THREE.Vector3;
    scale: number;
    speed: number;
    offset: number;
  }>>([]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 16,
          (Math.random() - 0.5) * 8
        ),
        scale: Math.random() * 0.04 + 0.01,
        speed: Math.random() * 0.3 + 0.1,
        offset: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = temp;
  }, [count]);

  useFrame(({ clock }) => {
    if (!mesh.current || particlesRef.current.length === 0) return;
    const time = clock.getElapsedTime();
    particlesRef.current.forEach((p, i) => {
      dummy.position.copy(p.position);
      dummy.position.y += Math.sin(time * p.speed + p.offset) * 0.5;
      dummy.position.x += Math.cos(time * p.speed * 0.5 + p.offset) * 0.3;
      dummy.scale.setScalar(p.scale * (1 + Math.sin(time * 0.5 + p.offset) * 0.3));
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 8, 8]} />
      <meshBasicMaterial color="#2BAE8E" transparent opacity={0.35} />
    </instancedMesh>
  );
}

function FloatingTorus({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
    ref.current.position.y = position[1] + Math.sin(t * 0.4) * 0.8;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[0.6, 0.15, 16, 32]} />
      <meshBasicMaterial color="#7B5EA7" transparent opacity={0.15} wireframe />
    </mesh>
  );
}

function FloatingOctahedron({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.z = t * 0.2;
    ref.current.position.y = position[1] + Math.cos(t * 0.35) * 0.6;
  });

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.4, 0]} />
      <meshBasicMaterial color="#E8A020" transparent opacity={0.12} wireframe />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        style={{ background: "transparent" }}
        dpr={[1, 1.5]}
      >
        <FloatingParticles count={60} />
        <FloatingTorus position={[-3, 1, -2]} />
        <FloatingTorus position={[3, -1, -3]} />
        <FloatingOctahedron position={[2, 2, -2]} />
        <FloatingOctahedron position={[-2, -2, -3]} />
      </Canvas>
    </div>
  );
}