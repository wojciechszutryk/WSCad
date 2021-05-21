import React, {useState} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";

const Line = () => {
    const position = useMousePosition();
    const [selectedPoints, setSelectedPoints] = useState(0);
    // const [position, setPosition] = useState({ x: 0, y: 0 });
    //
    // useEffect(() => {
    //     const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    //     window.addEventListener("mousemove", setFromEvent);
    //
    //     return () => {
    //         window.removeEventListener("mousemove", setFromEvent);
    //     };
    // }, []);
    return (
        <svg height={window.innerHeight} width={window.innerWidth}>
            <line x1="0" y1="0" x2={position.x} y2={position.y} style={{stroke:"rgb(255,0,0)"}} />
        </svg>
    );
};

export default Line;
