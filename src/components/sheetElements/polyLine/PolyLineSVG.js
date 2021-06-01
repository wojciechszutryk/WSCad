import React, {useMemo} from 'react';
import LineSVG from "../line";
import {DrawElementWrapper} from "../../drawElements/line/LineStyles";

const PolyLineSVG = ({id,
                color= 'red',
                linePattern = null,
                lineWidth = 1,
                points,
                canvasHeight = window.innerHeight,
                canvasWidth = window.innerWidth,
                onClick}) => {

    const polyLineToDraw = points.map((point, index) => {
        if (points[index+1]){
            return(
                <LineSVG
                    key={index}
                    id={id+'__'+index}
                    firstPointX = {point.x}
                    firstPointY = {point.y}
                    secondPointX = {points[index+1].x}
                    secondPointY = {points[index+1].y}
                    color= {color}
                    linePattern = {linePattern}
                    lineWidth = {lineWidth}
                    onClick = {() => onClick(id+'__'+index)}
                />
            )
        }
        return null;
    })

    return (
        polyLineToDraw
    )
};

export default PolyLineSVG;
