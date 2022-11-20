import { useEffect } from "react";

import {
    BoxGeometry,
    Color,
    Mesh,
    MeshBasicMaterial,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
} from "three";

import "./global.css";

export default function App() {
    useEffect(() => {
        const canvas = document.getElementById("three3d") as HTMLCanvasElement;

        const scene = new Scene();
        scene.background = new Color("skyblue");

        const fov = 35;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 100;

        const camera = new PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 0, 10);

        const geometry = new BoxGeometry(2, 2, 2);
        const material = new MeshBasicMaterial();
        const cube = new Mesh(geometry, material);

        scene.add(cube);

        const renderer = new WebGLRenderer({
            canvas,
            antialias: true,
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        renderer.render(scene, camera);
    });

    return (
        <>
            <canvas id="three3d"></canvas>
        </>
    );
}
