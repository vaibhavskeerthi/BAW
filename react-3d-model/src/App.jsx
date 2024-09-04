import { useState, Suspense } from 'react';
import { Text, OrbitControls } from '@react-three/drei';
import './App.css';

import { Canvas } from '@react-three/fiber';
import Dino from '../public/Dino.jsx';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' ,backgroundColor: 'black'}}>
      {/* Animated text div styled to match the provided image */}
      <div className="animated-text" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,  // Behind the canvas
      }}>
        BAW
        <br />
        STUDIO
      </div>

      {/* Canvas for 3D content */}
      <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
        <ambientLight />
        <OrbitControls />

        <Suspense fallback={null}>
          <Dino />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;


