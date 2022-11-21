import { useEffect } from "react";

import { World } from "./World";

import "./global.css";

export default function App() {
    useEffect(() => {
        World();
    });

    return <canvas id="three3d" />;
}
