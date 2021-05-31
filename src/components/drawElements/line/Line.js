import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import LineSVG from "../../Elements/line";
import {addLine} from "../../../data/actions/drawingActions/drawingActions";
import {connect} from "react-redux";

const Line = ({color, pattern, lineWidth, lines, addLine, width}) => {
    const offsetX = width+30;
    const offsetY = 10;
    const cursorPosition = useMousePosition(offsetX,offsetY);
    const pointsValue = useRef([]);
    const [pointsPosition, setPointsPosition] = useState([]);

    useEffect(() => {
        const setFromEvent = (e) => {
            pointsValue.current.push({x: e.clientX-offsetX, y: e.clientY-offsetY});
            const escapeFunction = () => {
                setPointsPosition([...pointsValue.current])
                stopDrawing()
            }
            if (pointsValue.current.length === 2) return escapeFunction();
            return setPointsPosition([...pointsValue.current])
        }
        const stopDrawing = (e) => {
            const clean = () => {
                window.removeEventListener("click", setFromEvent);
                window.removeEventListener("keydown", stopDrawing);
                document.getElementById('line'+(lines.length)).remove();
            }
            const finish = () => {
                window.removeEventListener("click", setFromEvent);
                window.removeEventListener("keydown", stopDrawing);
                const line = {}
                line[lines.length] = pointsValue.current;
                addLine(line);
            }
            if (e && e.code === 'Escape') return clean();
            return finish();
        }
        window.addEventListener("click", setFromEvent);
        window.addEventListener("keydown", stopDrawing);

        return () => {
            window.removeEventListener("click", setFromEvent);
            window.removeEventListener("keydown", stopDrawing);
        };
    }, [addLine]);

    let lineToDraw = null;
    if (pointsPosition.length === 2) lineToDraw = (
        <LineSVG
            id={'line'+(lines.length)}
            firstPointX = {pointsPosition[0].x}
            firstPointY = {pointsPosition[0].y}
            secondPointX = {pointsPosition[1].x}
            secondPointY = {pointsPosition[1].y}
            color= {color}
            linePattern = {pattern}
            lineWidth = {lineWidth}
        />)
    else if (pointsPosition.length === 1) lineToDraw = (
        <LineSVG
            id={'line'+(lines.length)}
            firstPointX = {pointsPosition[0].x}
            firstPointY = {pointsPosition[0].y}
            secondPointX = {cursorPosition.x}
            secondPointY = {cursorPosition.y}
            color= {color}
            linePattern = {pattern}
            lineWidth = {lineWidth}
        />)

    return (
        lineToDraw
    )
};

const ConnectedLine = connect(state => ({
        width: state.application.sheetOffset,
        lines: state.elements.lines,
        color: state.style.color,
        pattern: state.style.pattern,
        lineWidth: state.style.lineWidth,
    }),
    {
        addLine,
    }
)(Line);

export default ConnectedLine;
