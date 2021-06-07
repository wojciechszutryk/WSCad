import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import {addRect} from "../../../data/actions/drawingActions/drawingActions";
import {connect} from "react-redux";
import {setDrawing} from "../../../data/actions/applicationActions/applicationActions";
import RectSVG from "../../sheetElements/rect";

const Rect = ({id, color, pattern, lineWidth, fillColor, rects, addRect, offsetX, offsetY, sheetWidth, sheetHeight, drawing, setDrawing}) => {
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
                const [rect, styles] = [{}, {color, pattern, fillColor, lineWidth}];
                rect['point'] = {x: Math.min(pointsValue.current[0].x,pointsValue.current[1].x), y:Math.min(pointsValue.current[0].y,pointsValue.current[1].y)};
                rect['width'] = Math.abs(pointsValue.current[0].x - pointsValue.current[1].x)
                rect['height'] = Math.abs(pointsValue.current[0].y - pointsValue.current[1].y)
                rect['styles'] = styles;
                rect['id'] = id;
                addRect(rect);
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
    }, [id, setDrawing, addRect, color, fillColor, lineWidth, rects.length, offsetX, pattern, sheetHeight, sheetWidth, offsetY]);

    let rectToDraw = null;
    if (drawing === '') rectToDraw = null;
    else if (pointsPosition.length === 2) {
        rectToDraw = (
            <RectSVG
                positionX = {Math.min(pointsPosition[0].x,pointsPosition[1].x)}
                positionY = {Math.min(pointsPosition[0].y,pointsPosition[1].y)}
                width = {Math.abs(pointsPosition[0].x - pointsPosition[1].x)}
                height = {Math.abs(pointsPosition[0].y - pointsPosition[1].y)}
                color = {color}
                linePattern = {pattern}
                lineWidth = {lineWidth}
                fillColor = {fillColor}
            />)
    }
    else if (pointsPosition.length === 1) {
        rectToDraw = (
            <RectSVG
                positionX = {Math.min(pointsPosition[0].x, cursorPosition.x)}
                positionY = {Math.min(pointsPosition[0].y, cursorPosition.y)}
                width = {Math.abs(cursorPosition.x - pointsPosition[0].x)}
                height = {Math.abs(cursorPosition.y - pointsPosition[0].y)}
                color= {color}
                linePattern = {pattern}
                lineWidth = {lineWidth}
                fillColor = {fillColor}
            />)
    }

    return (
        rectToDraw
    )
};

const ConnectedRect = connect(state => ({
        drawing: state.application.drawing,
        offsetX: state.application.sheetOffsetX,
        offsetY: state.application.sheetOffsetY,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
        rects: state.elements.rects,
        color: state.style.color,
        fillColor: state.style.fill,
        pattern: state.style.pattern,
        lineWidth: state.style.lineWidth,
    }),
    {
        addRect,
        setDrawing,
    }
)(Rect);

export default ConnectedRect;