import * as THREE from 'three';

export type TreeMode = 'TREE' | 'SCATTERED';

export interface ParticleData {
  // Calculated final position for the Tree shape
  treePos: THREE.Vector3;
  treeRot: THREE.Euler;
  
  // Calculated random position for the Scattered shape
  scatterPos: THREE.Vector3;
  scatterRot: THREE.Euler;

  // Visual properties
  color: THREE.Color;
  scale: number;
  type: 'LEAF' | 'ORNAMENT_GOLD' | 'ORNAMENT_RED';
  
  // Animation offset for variety
  speed: number;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      meshPhysicalMaterial: any;
      instancedMesh: any;
      tetrahedronGeometry: any;
      meshStandardMaterial: any;
      ambientLight: any;
      spotLight: any;
      pointLight: any;
      color: any;
    }
  }
}