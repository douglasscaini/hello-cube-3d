import { createCamera } from "./components/Camera";
import { createCube } from "./components/Cube";
import { createScene } from "./components/Scene";
import { createRenderer } from "./systems/Renderer";
import { Resizer } from "./systems/Resizer";

export function World() {
    const camera = createCamera();
    const scene = createScene();
    const renderer = createRenderer();
    const cube = createCube();

    scene.add(cube);

    Resizer(camera, renderer);

    const render = () => {
        renderer.render(scene, camera);
    };

    return render();
}
