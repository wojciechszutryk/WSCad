import { useEffect, useState } from "react";

export const useMousePosition = (offsetX,offsetY) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const setFromEvent = (e) => setPosition({ x: e.clientX-offsetX, y: e.clientY-offsetY });
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, [offsetX, offsetY]);

    return position;
};