import * as THREE from "three";

/**
 * Creates a smooth animation curve for 3D objects
 */
export const createAnimationCurve = (
  startValue: number,
  endValue: number,
  progress: number,
  easing: "linear" | "easeInOut" | "bounce" = "easeInOut",
): number => {
  let easedProgress = progress;

  switch (easing) {
    case "easeInOut":
      easedProgress =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
      break;
    case "bounce":
      if (progress < 1 / 2.75) {
        easedProgress = 7.5625 * progress * progress;
      } else if (progress < 2 / 2.75) {
        easedProgress = 7.5625 * (progress -= 1.5 / 2.75) * progress + 0.75;
      } else if (progress < 2.5 / 2.75) {
        easedProgress = 7.5625 * (progress -= 2.25 / 2.75) * progress + 0.9375;
      } else {
        easedProgress =
          7.5625 * (progress -= 2.625 / 2.75) * progress + 0.984375;
      }
      break;
    default:
      easedProgress = progress;
  }

  return startValue + (endValue - startValue) * easedProgress;
};

/**
 * Generates random positions for floating objects
 */
export const generateRandomPosition = (
  minX: number = -5,
  maxX: number = 5,
  minY: number = -3,
  maxY: number = 3,
  minZ: number = -3,
  maxZ: number = 3,
): [number, number, number] => {
  return [
    Math.random() * (maxX - minX) + minX,
    Math.random() * (maxY - minY) + minY,
    Math.random() * (maxZ - minZ) + minZ,
  ];
};

/**
 * Creates a gradient material for 3D objects
 */
export const createGradientMaterial = (
  color1: string,
  color2: string,
  opacity: number = 1,
): THREE.MeshStandardMaterial => {
  return new THREE.MeshStandardMaterial({
    color: color1,
    transparent: opacity < 1,
    opacity,
    roughness: 0.4,
    metalness: 0.6,
  });
};

/**
 * Calculates mouse interaction position for 3D scenes
 */
export const calculateMousePosition = (
  event: MouseEvent,
  element: HTMLElement,
): { x: number; y: number } => {
  const rect = element.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  return { x, y };
};

/**
 * Creates smooth camera movement based on mouse position
 */
export const updateCameraPosition = (
  camera: THREE.Camera,
  mouseX: number,
  mouseY: number,
  intensity: number = 0.05,
): void => {
  if (camera) {
    camera.position.x += (mouseX * intensity - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * intensity - camera.position.y) * 0.05;
  }
};

/**
 * Performance optimization helper for 3D scenes
 */
export const optimizePerformance = (renderer: THREE.WebGLRenderer): void => {
  renderer.powerPreference = "high-performance";
  renderer.antialias = window.devicePixelRatio <= 1;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
};

/**
 * Creates particle system for background effects
 */
export const createParticleSystem = (count: number = 1000): THREE.Points => {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x888888,
    size: 0.5,
    transparent: true,
    opacity: 0.6,
  });

  return new THREE.Points(geometry, material);
};
