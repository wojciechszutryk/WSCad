import React, {useEffect, useMemo, useState} from 'react';
import {Sheet, WorkspaceWrapper} from "./WrokspaceStyles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PolyLine from "../../drawElements/polyLine";
import Line from "../../drawElements/line";
import {connect} from "react-redux";
import LineSVG from "../../sheetElements/line";
import PolyLineSVG from "../../sheetElements/polyLine";

const Workspace = ({drawing, drawings, offset, sheetWidth, sheetHeight}) => {
    const [toDraw, setToDraw] = useState([]);
    const lines = []
    const polyLines = []
    const elements = Object.entries(drawings).map(element => {
        if (element[0] === 'lines'){
            return element[1].forEach(line => (
                lines.push(<LineSVG
                    color = {line.styles.color}
                    linePattern = {line.styles.pattern}
                    lineWidth = {line.styles.lineWidth}
                    firstPointX = {line.points[0].x}
                    firstPointY = {line.points[0].y}
                    secondPointX = {line.points[1].x}
                    secondPointY = {line.points[1].y}
                />)
            ))
        }
        if (element[0] === 'polyLines'){
            return element[1].forEach(polyLine => {
                console.log(polyLine)
                polyLines.push(<PolyLineSVG
                    color = {polyLine.styles.color}
                    linePattern = {polyLine.styles.pattern}
                    lineWidth = {polyLine.styles.lineWidth}
                    points={polyLine.points}
                />)
            })
        }
    })

    console.log(polyLines)
    // useMemo(() => {
    //     if (drawing === 'line') {setToDraw([...toDraw,<Line/>])}
    //     else if (drawing === 'polyLine') {setToDraw([...toDraw,<PolyLine/>])}
    // },[drawing, toDraw])
    return (
        <WorkspaceWrapper offset={offset+30}>
            <TransformWrapper>
                <TransformComponent>
                    <Sheet sheetWidth={sheetWidth} sheetHeight={sheetHeight}/>
                    <PolyLine/>
                    {polyLines}
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
    }),null
)(Workspace);

export default ConnectedWorkspace;
