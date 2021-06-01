import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import LineSVG from "../../sheetElements/line";
import {addLine} from "../../../data/actions/drawingActions/drawingActions";
import {connect} from "react-redux";
import {setDrawing} from "../../../data/actions/applicationActions/applicationActions";

const Line = ({id, color, pattern, lineWidth, lines, addLine, offset, sheetWidth, sheetHeight, drawing, setDrawing}) => {
    const offsetX = offset+30;
    const offsetY = 10;
    const cursorPosition = useMousePosition(offsetX,offsetY);
    const pointsValue = useRef([]);
    const [pointsPosition, setPointsPosition] = useState([]);

    useEffect(() => {
        const setFromEvent = (e) => {
            if (e.clientX < offsetX + sheetWidth && e.clientX > offsetX &&
                e.clientY < offsetY + sheetHeight && e.clientY > offsetY) pointsValue.current.push({x: e.clientX-offsetX, y: e.clientY-offsetY});
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
                setDrawing('');
            }
            const finish = () => {
                window.removeEventListener("click", setFromEvent);
                window.removeEventListener("keydown", stopDrawing);
                const [line, styles] = [{}, {color, pattern, lineWidth}];
                line['points'] = pointsValue.current;
                line['styles'] = styles;
                line['id'] = id;
                addLine(line);
                setDrawing('');
            }
            if (e && e.code === 'Escape') return clean();
            return finish();
        }
        window.addEventListener("click", setFromEvent);
        window.addEventListener("keydown", stopDrawing);

        return () => {
            setDrawing('');
            window.removeEventListener("click", setFromEvent);
            window.removeEventListener("keydown", stopDrawing);
        };
    }, [id, setDrawing, addLine, color, lineWidth, lines.length, offsetX, pattern, sheetHeight, sheetWidth]);

    let lineToDraw = null;
    if (drawing === '') lineToDraw = null;
    else if (pointsPosition.length === 2) lineToDraw = (
        <LineSVG
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
        drawing: state.application.drawing,
        offset: state.application.sheetOffset,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
        lines: state.elements.lines,
        color: state.style.color,
        pattern: state.style.pattern,
        lineWidth: state.style.lineWidth,
    }),
    {
        addLine,
        setDrawing,
    }
)(Line);

export default ConnectedLine;
