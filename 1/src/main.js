import {
    BoxBufferGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "https://cdn.skypack.dev/three";

// Get a reference to container element that holds scene
const container = document.querySelector('#scene-container');

const scene = new Scene(); // Create a new scene
scene.background = new Color('skyblue'); // Set bgcolor

// Create a camera
const fov = 35; // Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // Near clipping plane
const far = 100; // Far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

camera.position.set(1, 1, 10); // Move the camera back

// --------------------------------------------------------------------
const geometry = new BoxBufferGeometry(); // Create geometry for a cube
const material = new MeshBasicMaterial(); // Create material for a cube

const cube = new Mesh(geometry, material);
scene.add(cube);
// --------------------------------------------------------------------

const renderer = new WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);

container.append(renderer.domElement);

renderer.render(scene, camera)