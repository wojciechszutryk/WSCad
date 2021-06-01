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

    const handleOnClick = (id) => {
        const onSelect = (id) => {
            console.log('select')
        }
        const onDelete = (id) => {
            console.log(id)
            document.getElementById(id).style.display = 'none';
        }
        if (drawing === 'select') return onSelect(id);
        else if (drawing === 'delete') return onDelete(id);
        else return () => {}
    }

    Object.entries(drawings).forEach(element => {
        if (element[0] === 'lines'){
            return element[1].forEach((line,index) => (
                lines.push(<LineSVG
                    id={'line__'+index}
                    key={line.points[0].x*line.points[1].y}
                    color = {line.styles.color}
                    linePattern = {line.styles.pattern}
                    lineWidth = {line.styles.lineWidth}
                    firstPointX = {line.points[0].x}
                    firstPointY = {line.points[0].y}
                    secondPointX = {line.points[1].x}
                    secondPointY = {line.points[1].y}
                    onClick = {() => handleOnClick('line__'+index)}
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
