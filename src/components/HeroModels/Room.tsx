import { useEffect, useRef, useState } from 'react'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'
import { useGLTF, useTexture } from '@react-three/drei'
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'

interface RoomProps {
  [key: string]: unknown
}

export function Room(props: RoomProps) {
  const { nodes, materials } = useGLTF('/models/optimized-room.glb')
  const screensRef = useRef<THREE.Mesh | null>(null)
  const matcapTexture = useTexture('/images/textures/mat1.png')

  const [isReady, setIsReady] = useState(false)

  const curtainMaterial = new THREE.MeshPhongMaterial({ color: '#d90429' })
  const bodyMaterial = new THREE.MeshPhongMaterial({ map: matcapTexture })
  const tableMaterial = new THREE.MeshPhongMaterial({
    color: '#582f0e',
  })
  const radiatorMaterial = new THREE.MeshPhongMaterial({
    color: '#fff',
  })
  const compMaterial = new THREE.MeshStandardMaterial({
    color: '#fff',
  })
  const pillowMaterial = new THREE.MeshPhongMaterial({
    color: '#8338ec',
  })
  const chairMaterial = new THREE.MeshPhongMaterial({
    color: '#000',
  })

  useEffect(() => {
    if (screensRef.current) {
      setIsReady(true)
    }
  }, [])

  return (
    <group {...props} dispose={null}>
      <EffectComposer>
        <SelectiveBloom
          selection={isReady && screensRef.current ? [screensRef.current] : []}
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
      <mesh
        geometry={(nodes._________6_blinn1_0 as THREE.Mesh).geometry}
        material={curtainMaterial}
      />
      <mesh
        geometry={(nodes.body1_blinn1_0 as THREE.Mesh).geometry}
        material={bodyMaterial}
      />
      <mesh
        geometry={(nodes.cabin_blinn1_0 as THREE.Mesh).geometry}
        material={tableMaterial}
      />
      <mesh
        geometry={(nodes.chair_body_blinn1_0 as THREE.Mesh).geometry}
        material={chairMaterial}
      />
      <mesh
        geometry={(nodes.comp_blinn1_0 as THREE.Mesh).geometry}
        material={compMaterial}
      />
      <mesh
        ref={screensRef}
        geometry={(nodes.emis_lambert1_0 as THREE.Mesh).geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={(nodes.handls_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.keyboard_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.kovrik_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.lamp_bl_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.lamp_white_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.miuse_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.monitor2_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.monitor3_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.pCylinder5_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.pillows_blinn1_0 as THREE.Mesh).geometry}
        material={pillowMaterial}
      />
      <mesh
        geometry={(nodes.polySurface53_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.radiator_blinn1_0 as THREE.Mesh).geometry}
        material={radiatorMaterial}
      />
      <mesh
        geometry={(nodes.radiator_blinn1_0001 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.railing_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.red_bttns_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.red_vac_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.stylus_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.table_blinn1_0 as THREE.Mesh).geometry}
        material={tableMaterial}
      />
      <mesh
        geometry={(nodes.tablet_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.triangle_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.vac_black_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.vacuum1_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.vacuumgrey_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.vires_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.window_blinn1_0 as THREE.Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.window4_phong1_0 as THREE.Mesh).geometry}
        material={materials.phong1}
      />
    </group>
  )
}

useGLTF.preload('/models/optimized-room.glb')
