import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import LineSVG from "../../sheetElements/line";
import {connect} from "react-redux";
import {addPolyLine} from "../../../data/actions/drawingActions/drawingActions";

const PolyLine = ({color, pattern, lineWidth,addPolyLine, offset, sheetWidth, sheetHeight}) => {
    const offsetX = offset+30;
    const offsetY = 10;
    const cursorPosition = useMousePosition(offsetX,offsetY);
    const pointsValue = useRef([]);
    const [pointsPosition, setPointsPosition] = useState([]);

    useEffect(() => {
        const setFromEvent = (e) => {
            if (e.clientX < offsetX + sheetWidth && e.clientX > offsetX &&
                e.clientY < offsetY + sheetHeight && e.clientY > offsetY) pointsValue.current.push({x: e.clientX-offsetX, y: e.clientY-offsetY});
            return setPointsPosition([...pointsValue.current])
        }
        const stopDrawing = (e) => {
            const clean = () => {
                window.removeEventListener("click", setFromEvent);
                window.removeEventListener("keydown", stopDrawing);
                if (pointsValue.current.length > 0)document.getElementById(`${pointsValue.current.length - 1}`).remove();
                const [PolyLine, styles] = [{}, {color, pattern, lineWidth}];
                PolyLine['points'] = pointsValue.current;
                PolyLine['styles'] = styles;
                addPolyLine(PolyLine);
            }
            if (e.code === 'Escape') return clean();
        }
        window.addEventListener("click", setFromEvent);
        window.addEventListener("keydown", stopDrawing);

        return () => {
            window.removeEventListener("click", setFromEvent);
            window.removeEventListener("keydown", stopDrawing);
        };
    }, [addPolyLine, color, lineWidth, offsetX, pattern, sheetHeight, sheetWidth]);

    const linesToDraw = pointsPosition.map((point, index) => {
        if (pointsValue.current.length === 1 || index === pointsPosition.length-1){
            return(
                <LineSVG
                    key={index}
                    id={index.toString()}
                    firstPointX = {point.x}
                    firstPointY = {point.y}
                    secondPointX = {cursorPosition.x}
                    secondPointY = {cursorPosition.y}
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
    offset: state.application.sheetOffset,
    sheetWidth: state.application.sheetWidth,
    sheetHeight: state.application.sheetHeight,
    color: state.style.color,
    pattern: state.style.pattern,
    lineWidth: state.style.lineWidth,
}),
    {
        addPolyLine,
    }
)(PolyLine);

export default ConnectedPolyLine;
