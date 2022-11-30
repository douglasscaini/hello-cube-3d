import { PerspectiveCamera, WebGLRenderer } from "three";

export interface OnResizeType {
    (): void;
}

const setSize = (camera: PerspectiveCamera, renderer: WebGLRenderer) => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
};

export function Resizer(
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
    onResize: OnResizeType
) {
    window.addEventListener("resize", () => {
        setSize(camera, renderer);

        onResize();
    });

    setSize(camera, renderer);
}
