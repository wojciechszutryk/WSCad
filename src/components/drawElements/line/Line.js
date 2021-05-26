import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import LineSVG from "../../Elements/line";

const Line = () => {

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
        const stopDrawing = (e) => {
            const clean = () => {
                window.removeEventListener("click", setFromEvent);
                window.removeEventListener("keydown", stopDrawing);
                if (pointsValue.current > 0) document.getElementById(`${pointsValue.current + firstPointPosition}`).remove();
            }
            if (e.code === 'Escape') return clean();
        }
        window.addEventListener("click", setFromEvent);
        window.addEventListener("keydown", stopDrawing);

        return () => {
            window.removeEventListener("click", setFromEvent);
        };
    }, []);

    return (
        pointsValue.current > 0
            ?
                <LineSVG
                    id={pointsValue.current + firstPointPosition}
                    firstPointX = {selectedPoints === 0 ? cursorPosition.x : firstPointPosition.x}
                    firstPointY = {selectedPoints === 0 ? cursorPosition.y : firstPointPosition.y}
                    secondPointX = {selectedPoints === 1 ? cursorPosition.x : secondPointPosition.x}
                    secondPointY = {selectedPoints === 1 ? cursorPosition.y : secondPointPosition.y}
                />
            :
                null
    );
};

export default Line;