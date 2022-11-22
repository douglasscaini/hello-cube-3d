import { WebGLRenderer } from "three";

export function createRenderer() {
    const canvas = document.getElementById("three3d") as HTMLCanvasElement;

    const renderer = new WebGLRenderer({
        canvas,
        antialias: true,
    });

    renderer.physicallyCorrectLights = true;

    return renderer;
}
