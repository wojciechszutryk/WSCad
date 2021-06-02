import React, {useMemo} from 'react';

const RectSVG = ({id,
                color= 'red',
                linePattern = null,
                lineWidth = 1,
                positionX = 0,
                positionY = 0,
                radiusX= 0,
                radiusY = 0,
                width= 1,
                height= 1,
                fillColor = 'transparent',
                onClick}) => {

    const rectStyle = useMemo(() => ({
        stroke: color,
        strokeWidth: lineWidth,
        strokeDasharray: linePattern,
        fill: fillColor,
    }), [color, lineWidth, linePattern, fillColor]);

    return (
        <rect
            id={id}
            x={positionX}
            y={positionY}
            rx={radiusX}
            ry={radiusY}
            width={width}
            height={height}
            style={rectStyle}
            onClick={onClick}
        />
    )
};

export default RectSVG;
