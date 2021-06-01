import React, {useMemo} from 'react';

const LineSVG = ({id,
                color= 'red',
                linePattern = null,
                lineWidth = 1,
                firstPointX = 0,
                firstPointY = 0,
                secondPointX = 0,
                secondPointY = 0,
                onClick}) => {

    const lineStyle = useMemo(() => ({
        stroke: color,
        strokeWidth: lineWidth,
        strokeDasharray: linePattern,
    }), [color, lineWidth, linePattern]);

    return (
        <line
            id={id}
            x1={firstPointX}
            y1={firstPointY}
            x2={secondPointX}
            y2={secondPointY}
            style={lineStyle}
            onClick={onClick}
        />
    )
};

export default LineSVG;
