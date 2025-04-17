import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

interface RoomProps {
  [key: string]: unknown
}

export function Room(props: RoomProps) {
  const { nodes, materials } = useGLTF('/models/optimized-room.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes._________6_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.body1_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.cabin_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.chair_body_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.comp_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.emis_lambert1_0 as Mesh).geometry}
        material={materials.lambert1}
      />
      <mesh
        geometry={(nodes.handls_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.keyboard_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.kovrik_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.lamp_bl_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.lamp_white_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.miuse_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.monitor2_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.monitor3_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.pCylinder5_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.pillows_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.polySurface53_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.radiator_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.radiator_blinn1_0001 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.railing_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.red_bttns_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.red_vac_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.stylus_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.table_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.tablet_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.triangle_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.vac_black_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.vacuum1_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.vacuumgrey_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.vires_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.window_blinn1_0 as Mesh).geometry}
        material={materials.blinn1}
      />
      <mesh
        geometry={(nodes.window4_phong1_0 as Mesh).geometry}
        material={materials.phong1}
      />
    </group>
  )
}

useGLTF.preload('/models/optimized-room.glb')
