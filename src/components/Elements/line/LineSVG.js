import React, {useMemo} from 'react';

const LineSVG = ({id,
                color= 'red',
                linePattern = null,
                lineWidth = 1,
                firstPointX = 0,
                firstPointY = 0,
                secondPointX = 0,
                secondPointY = 0,
                canvasHeight = window.innerHeight,
                canvasWidth = window.innerWidth}) => {

    const lineStyle = useMemo(() => ({
        stroke: color,
        strokeWidth: lineWidth,
        strokeDasharray: linePattern
    }), [color, lineWidth, linePattern]);

    return (
        <svg
            id={id ? id : undefined}
            height={canvasHeight}
            width={canvasWidth}
            style={{position: 'fixed'}}>
            <line
                x1={firstPointX}
                y1={firstPointY}
                x2={secondPointX}
                y2={secondPointY}
                style={lineStyle}
            />
        </svg>
    )
};

export default LineSVG;
