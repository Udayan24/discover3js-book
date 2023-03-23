import { PerspectiveCamera } from "https://cdn.skypack.dev/three";

function createCamera() {
    const camera = new PerspectiveCamera(
        50, // fov
        1, // aspect ratio
        0.1, // near clipping plane
        100, // far clipping plane
    );

    camera.position.set(2, 2, 20);
    return camera;
}

export {createCamera}