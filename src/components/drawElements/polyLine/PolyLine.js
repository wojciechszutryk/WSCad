import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import LineSVG from "../../Elements/line";
import {connect} from "react-redux";
import {addPolyLine} from "../../../data/actions/drawingActions/drawingActions";

const PolyLine = ({color, pattern, lineWidth,addPolyLine, width}) => {
    const offsetX = width+30;
    const offsetY = 10;
    const cursorPosition = useMousePosition();
    const pointsValue = useRef([]);
    const [pointsPosition, setPointsPosition] = useState([]);

    useEffect(() => {
        const setFromEvent = (e) => {
            pointsValue.current.push({x: e.clientX-offsetX, y: e.clientY-offsetY});
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
        if (pointsValue.current.length === 1 || index === pointsPosition.length-1){
            return(
                <LineSVG
                    key={index}
                    id={index.toString()}
                    firstPointX = {point.x}
                    firstPointY = {point.y}
                    secondPointX = {cursorPosition.x-offsetX}
                    secondPointY = {cursorPosition.y-offsetY}
                    color= {color}
                    linePattern = {pattern}
                    lineWidth = {lineWidth}
                />
            )
        }
        return(
            <LineSVG
                key={index}
                id={index}
                firstPointX = {point.x}
                firstPointY = {point.y}
                secondPointX = {pointsPosition[index+1].x}
                secondPointY = {pointsPosition[index+1].y}
                color= {color}
                linePattern = {pattern}
                lineWidth = {lineWidth}
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

const ConnectedPolyLine = connect(state => ({
    width: state.application.sheetOffset,
    color: state.style.color,
    pattern: state.style.pattern,
    lineWidth: state.style.lineWidth,
}),
    {
        addPolyLine,
    }
)(PolyLine);

export default ConnectedPolyLine;
