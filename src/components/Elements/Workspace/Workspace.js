import React from 'react';
import {WorkspaceWrapper} from "./WrokspaceStyles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PolyLine from "../../drawElements/polyLine";
import Line from "../../drawElements/line";
import {connect} from "react-redux";
import LineSVG from "../../sheetElements/line";
import PolyLineSVG from "../../sheetElements/polyLine";
import Sheet from "./Sheet";
import {deleteCircle, deleteLine, deleteRect} from "../../../data/actions/drawingActions/drawingActions";
import CircleSVG from "../../sheetElements/circle";
import Circle from "../../drawElements/circle/Circle";

const Workspace = ({drawing, drawings, offset, sheetWidth, sheetHeight, deleteLine, deleteCircle, deleteRect}) => {
    const lines = []
    const polyLines = []
    const circles = []
    const rects = []

    const handleOnClick = (id, type) => {
        const onSelect = (id) => {
            console.log('select '+id)
        }
        const onDelete = (id, type) => {
            switch (type) {
                case "circle": deleteCircle(id); break;
                case "rect": deleteRect(id); break;
                default: deleteLine(id); break;
            }
        }
        if (drawing === 'select') return onSelect(id);
        else if (drawing === 'delete') return onDelete(id,type);
        else return () => {}
    }

    Object.entries(drawings).forEach(element => {
        if (element[0] === 'lines'){
            return element[1].forEach((line) => (
                lines.push(<LineSVG
                    id={line.id}
                    key={line.points[0].x*line.points[1].y}
                    color = {line.styles.color}
                    linePattern = {line.styles.pattern}
                    lineWidth = {line.styles.lineWidth}
                    firstPointX = {line.points[0].x}
                    firstPointY = {line.points[0].y}
                    secondPointX = {line.points[1].x}
                    secondPointY = {line.points[1].y}
                    onClick = {() => handleOnClick(line.id, 'line')}
                />)
            ))
        }
        if (element[0] === 'circles'){
            return element[1].forEach((circle) => (
                circles.push(<CircleSVG
                    id={circle.id}
                    key={circle.point.x*circle.point.y}
                    color = {circle.styles.color}
                    fillColor = {circle.styles.fillColor}
                    linePattern = {circle.styles.pattern}
                    lineWidth = {circle.styles.lineWidth}
                    centerX = {circle.point.x}
                    centerY = {circle.point.y}
                    radius = {circle.radius}
                    onClick = {() => handleOnClick(circle.id, 'circle')}
                />)
            ))
        }
        if (element[0] === 'polyLines'){
            return element[1].forEach((polyLine,index) => {
                polyLines.push(<PolyLineSVG
                    id={'polyLine__'+index}
                    key={polyLine.points[0].x*polyLine.points[1].y}
                    color = {polyLine.styles.color}
                    linePattern = {polyLine.styles.pattern}
                    lineWidth = {polyLine.styles.lineWidth}
                    points={polyLine.points}
                    onClick = {(id) => handleOnClick(id, 'line')}
                />)
            })
        }
    })

    return (
        <WorkspaceWrapper offset={offset+30}>
            <TransformWrapper>
                <TransformComponent>
                    <Sheet sheetWidth={sheetWidth} sheetHeight={sheetHeight} drawing={drawing}>
                        {circles}
                        {polyLines}
                        {lines}
                        {drawing === 'line' && <Line id={'line__'+drawings.lines.length}/>}
                        {drawing === 'circle' && <Circle id={'circle__'+drawings.circles.length}/>}
                        {drawing === 'polyLine' && <PolyLine id={'line__'+drawings.lines.length}/>}
                    </Sheet>
                </TransformComponent>
            </TransformWrapper>
        </WorkspaceWrapper>
    );
};

const ConnectedWorkspace = connect(state => ({
        drawing: state.application.drawing,
        drawings: state.elements,
        offset: state.application.sheetOffset,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
    }), {
        deleteLine,
        deleteCircle,
        deleteRect,
    }
)(Workspace);

export default ConnectedWorkspace;
