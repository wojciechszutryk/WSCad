import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import {addCircle, addLine} from "../../../data/actions/drawingActions/drawingActions";
import {connect} from "react-redux";
import {setDrawing} from "../../../data/actions/applicationActions/applicationActions";
import CircleSVG from "../../sheetElements/circle";

const Circle = ({id, color, pattern, lineWidth, fillColor, circles, addCircle, offset, sheetWidth, sheetHeight, drawing, setDrawing}) => {
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
                const [circle, styles] = [{}, {color, pattern, fillColor, lineWidth}];
                circle['point'] = pointsValue.current[0];
                circle['radius'] = Math.sqrt(Math.abs((pointsValue.current[0].x-pointsValue.current[1].x)**2)+Math.abs((pointsValue.current[0].y-pointsValue.current[1].y)**2))
                circle['styles'] = styles;
                circle['id'] = id;
                addCircle(circle);
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
    }, [id, setDrawing, addCircle, color, fillColor, lineWidth, circles.length, offsetX, pattern, sheetHeight, sheetWidth]);

    let circleToDraw = null;
    if (drawing === '') circleToDraw = null;
    else if (pointsPosition.length === 2) {
        circleToDraw = (
            <CircleSVG
                centerX = {pointsPosition[0].x}
                centerY = {pointsPosition[0].y}
                radius = {Math.sqrt(Math.abs((pointsPosition[1].x-pointsPosition[0].x)**2)+Math.abs((pointsPosition[1].y-pointsPosition[0].y)**2))}
                color= {color}
                linePattern = {pattern}
                lineWidth = {lineWidth}
                fillColor = {fillColor}
            />)
    }
    else if (pointsPosition.length === 1) {
        circleToDraw = (
            <CircleSVG
                centerX = {pointsPosition[0].x}
                centerY = {pointsPosition[0].y}
                radius = {Math.sqrt(Math.abs((cursorPosition.x-pointsPosition[0].x)**2)+Math.abs((cursorPosition.y-pointsPosition[0].y)**2))}
                color= {color}
                linePattern = {pattern}
                lineWidth = {lineWidth}
                fillColor = {fillColor}
            />)
    }

    return (
        circleToDraw
    )
};

const ConnectedCircle = connect(state => ({
        drawing: state.application.drawing,
        offset: state.application.sheetOffset,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
        circles: state.elements.circles,
        color: state.style.color,
        fillColor: state.style.fill,
        pattern: state.style.pattern,
        lineWidth: state.style.lineWidth,
    }),
    {
        addCircle,
        setDrawing,
    }
)(Circle);

export default ConnectedCircle;
