// Import Three.js library
//import * as THREE from 'three';

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('content').appendChild(renderer.domElement);

console.log('walla walla')

// Create a cube with text on each wall
const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const textMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
const cubeMaterials = [
  textMaterial,
  textMaterial,
  textMaterial,
  textMaterial,
  textMaterial,
  textMaterial
];
const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
scene.add(cube);

// Set up navigation controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableKeys = true;
controls.keys = {LEFT: 65, UP: 87, RIGHT: 68, BOTTOM: 83};
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.screenSpacePanning = false;
controls.minDistance = 1;
controls.maxDistance = 100;

// Update camera aspect ratio on window resize
window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Render loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();