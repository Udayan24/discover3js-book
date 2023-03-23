import { World } from './world/world.js';

// Create main function
function main() {
    const container = document.querySelector('#scene-container')

    // Create instance of world app
    const world = new World(container);
    world.render();
}

main(); // Call main to start the app