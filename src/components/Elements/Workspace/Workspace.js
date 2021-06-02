import React from 'react';
import {WorkspaceWrapper} from "./WrokspaceStyles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PolyLine from "../../drawElements/polyLine";
import Line from "../../drawElements/line";
import {connect} from "react-redux";
import LineSVG from "../../sheetElements/line";
import PolyLineSVG from "../../sheetElements/polyLine";
import Sheet from "./Sheet";
import {deleteLine} from "../../../data/actions/drawingActions/drawingActions";

const Workspace = ({drawing, drawings, offset, sheetWidth, sheetHeight, deleteLine}) => {
    const lines = []
    const polyLines = []

    const handleOnClick = (id) => {
        const onSelect = (id) => {
            console.log('select '+id)
        }
        const onDelete = (id) => {
            deleteLine(id)
        }
        if (drawing === 'select') return onSelect(id);
        else if (drawing === 'delete') return onDelete(id);
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
                    onClick = {() => handleOnClick(line.id)}
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
                    onClick = {(id) => handleOnClick(id)}
                />)
            })
        }
    })

    return (
        <WorkspaceWrapper offset={offset+30}>
            <TransformWrapper>
                <TransformComponent>
                    <Sheet sheetWidth={sheetWidth} sheetHeight={sheetHeight} drawing={drawing}>
                        {lines}
                        {polyLines}
                        {drawing === 'line' && <Line id={'line__'+drawings.lines.length}/>}
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
    }
)(Workspace);

export default ConnectedWorkspace;
