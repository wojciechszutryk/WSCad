import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Sheet, WorkspaceWrapper} from "./WrokspaceStyles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PolyLine from "../../drawElements/polyLine";
import Line from "../../drawElements/line";
import {connect} from "react-redux";
import LineSVG from "../../sheetElements/line";
import PolyLineSVG from "../../sheetElements/polyLine";

const Workspace = ({drawing, drawings, offset, sheetWidth, sheetHeight}) => {
    const lines = []
    const polyLines = []

    Object.entries(drawings).forEach(element => {
        if (element[0] === 'lines'){
            return element[1].forEach(line => (
                lines.push(<LineSVG
                    key={line.points[0].x*line.points[1].y}
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
                polyLines.push(<PolyLineSVG
                    key={polyLine.points[0].x*polyLine.points[1].y}
                    color = {polyLine.styles.color}
                    linePattern = {polyLine.styles.pattern}
                    lineWidth = {polyLine.styles.lineWidth}
                    points={polyLine.points}
                />)
            })
        }
    })

    return (
        <WorkspaceWrapper offset={offset+30}>
            <TransformWrapper>
                <TransformComponent>
                    <Sheet sheetWidth={sheetWidth} sheetHeight={sheetHeight}/>
                    {lines}
                    {polyLines}
                    {drawing === 'line' && <Line/>}
                    {drawing === 'polyLine' && <PolyLine/>}
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
