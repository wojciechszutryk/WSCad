import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";

const Line = ({color= 'red',
                linePattern = null,
                lineWidth = 1,
                canvasHeight = window.innerHeight,
                canvasWidth = window.innerWidth,}) => {

    const cursorPosition = useMousePosition();
    const pointsValue = useRef(0);
    const [selectedPoints, setSelectedPoints] = useState(pointsValue.current);
    const [firstPointPosition, setFirstPointPosition] = useState({ x: null, y: null });
    const [secondPointPosition, setSecondPointPosition] = useState({ x: null, y: null });

    useEffect(() => {
        const setFromEvent = (e) => {
            const returnFunction = (pointsValue.current === 0)
                ? () => {
                    pointsValue.current += 1;
                    setSelectedPoints(pointsValue.current)
                    setFirstPointPosition({ x: e.clientX, y: e.clientY })
                }
                : () => {
                    pointsValue.current += 1;
                    setSelectedPoints(pointsValue.current)
                    setSecondPointPosition({ x: e.clientX, y: e.clientY })
                }
            if (pointsValue.current >= 2) return window.removeEventListener("click", setFromEvent);
            return returnFunction()
        }
        window.addEventListener("click", setFromEvent);

        return () => {
            window.removeEventListener("click", setFromEvent);
        };
    }, []);

    const lineStyle = {
        stroke: color,
        strokeWidth: lineWidth,
        strokeDasharray: linePattern
    };


    return (
        pointsValue.current > 0
            ?
                <svg height={canvasHeight} width={canvasWidth}>
                    <line
                        x1={selectedPoints === 0 ? cursorPosition.x : firstPointPosition.x}
                        y1={selectedPoints === 0 ? cursorPosition.y : firstPointPosition.y}
                        x2={selectedPoints === 1 ? cursorPosition.x : secondPointPosition.x}
                        y2={selectedPoints === 1 ? cursorPosition.y : secondPointPosition.y}
                        style={lineStyle}
                    />
                </svg>
            :
                null
    );
};

export default Line;
