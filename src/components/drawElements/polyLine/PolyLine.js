import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import LineSVG from "../../Elements/line";

const PolyLine = () => {
    const cursorPosition = useMousePosition();
    const pointsValue = useRef([]);
    const [pointsPosition, setPointsPosition] = useState([]);

    useEffect(() => {
        const setFromEvent = (e) => {
            pointsValue.current.push({x: e.clientX, y: e.clientY});
            return setPointsPosition([...pointsValue.current])
        }
        const stopDrawing = (e) => {
            window.removeEventListener("click", setFromEvent);
        }
        window.addEventListener("click", setFromEvent);
        window.addEventListener("keydown", stopDrawing);

        return () => {
            window.removeEventListener("click", setFromEvent);
            window.removeEventListener("keydown", stopDrawing);
        };
    }, []);

    const linesToDraw = pointsPosition.map((point, index) => {
        console.log(point)
        if (pointsPosition.length === 1 || index === pointsPosition.length-1){
            console.log('returning line drawing')
            return(
                <LineSVG
                    key={index}
                    firstPointX = {point.x}
                    firstPointY = {point.y}
                    secondPointX = {cursorPosition.x}
                    secondPointY = {cursorPosition.y}
                />
            )
        }
        return(
            <LineSVG
                key={index}
                firstPointX = {point.x}
                firstPointY = {point.y}
                secondPointX = {pointsPosition[index+1].x}
                secondPointY = {pointsPosition[index+1].y}
            />
        )
    })
    // console.log(linesToDraw)

    return (
        pointsValue.current.length > 2
            ?
                linesToDraw
            :
                null
    );
};

export default PolyLine;
