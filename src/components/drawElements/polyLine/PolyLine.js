import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import LineSVG from "../../Elements/line";
import {connect} from "react-redux";
import {addPolyLine} from "../../../data/actions/drawingActions/drawingActions";

const PolyLine = ({addPolyLine}) => {
    const cursorPosition = useMousePosition();
    const pointsValue = useRef([]);
    const [pointsPosition, setPointsPosition] = useState([]);

    useEffect(() => {
        const setFromEvent = (e) => {
            pointsValue.current.push({x: e.clientX, y: e.clientY});
            return setPointsPosition([...pointsValue.current])
        }
        const stopDrawing = (e) => {
            const clean = () => {
                window.removeEventListener("click", setFromEvent);
                window.removeEventListener("keydown", stopDrawing);
                document.getElementById(`${pointsValue.current.length - 1}`).remove();
                addPolyLine(pointsValue.current);
            }
            if (e.code === 'Escape') return clean();
        }
        window.addEventListener("click", setFromEvent);
        window.addEventListener("keydown", stopDrawing);

        return () => {
            window.removeEventListener("click", setFromEvent);
            window.removeEventListener("keydown", stopDrawing);
        };
    }, [addPolyLine]);

    const linesToDraw = pointsPosition.map((point, index) => {
        if (pointsPosition.length === 1 || index === pointsPosition.length-1){
            return(
                <LineSVG
                    key={index}
                    id={index}
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

    return (
        pointsValue.current.length > 0
            ?
                linesToDraw
            :
                null
    );
};

const ConnectedPolyLine = connect(null,
    {
        addPolyLine,
    }
)(PolyLine);

export default ConnectedPolyLine;
