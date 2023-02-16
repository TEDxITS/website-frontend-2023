'use client';
import { PointMaterial, Points } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { random } from 'maath';
import React from 'react';
import * as THREE from 'three';

import clsxm from '@/utils/clsxm';

interface StarsProps {
  isRotating?: boolean;
}

function Stars({
  isRotating,
  ...props
}: StarsProps & JSX.IntrinsicElements['points']) {
  const ref = React.useRef<THREE.Points>(null);
  const [sphere] = React.useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    if (ref.current) {
      if (isRotating) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
      } else {
        ref.current.position.z += 0.01;
      }
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color='#DCB69F'
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function RandomStarfieldContainer({
  children,
  className = '',
  isRotating = true,
  isOverflow = false,
  zAxis = 1,
}: {
  children: React.ReactNode;
  className?: string;
  isRotating?: boolean;
  isOverflow?: boolean;
  zAxis?: number;
}) {
  return (
    <main
      className={clsxm(
        'relative h-screen w-screen bg-black',
        isOverflow ? 'overflow-y-auto' : 'overflow-hidden',
        className
      )}
    >
      {children}
      <Canvas className='star-fade absolute' camera={{ position: [0, 0, zAxis] }}>
        <Stars isRotating={isRotating} />
      </Canvas>
    </main>
  );
}
