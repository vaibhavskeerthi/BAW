/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 dino.gltf 
Author: Gman08 (https://sketchfab.com/Gman08)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rubix-cube-8c9a5d13325b4923baac1bf038a01913
Title: Rubix Cube
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/dino.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={.2}>
        <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Object_5.geometry} material={materials['Material.002']} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Object_9.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Object_10.geometry} material={materials['Material.007']} />
      </group>
      
    </group>
  )
}

useGLTF.preload('/dino.gltf')
