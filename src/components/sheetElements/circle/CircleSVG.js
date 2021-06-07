import React, {useMemo} from 'react';

const CircleSVG = ({id,
                       color= 'red',
                       linePattern = null,
                       lineWidth = 1,
                       centerX = 0,
                       centerY = 0,
                       radius = 1,
                       fillColor = 'transparent',
                       onClick}) => {

    const circleStyle = useMemo(() => ({
        stroke: color,
        strokeWidth: lineWidth,
        strokeDasharray: linePattern,
        fill: fillColor,
    }), [color, lineWidth, linePattern, fillColor]);

    return (
        <circle
            id={id}
            cx={centerX}
            cy={centerY}
            r={radius}
            style={circleStyle}
            onClick={onClick}
        />
    )
};

export default CircleSVG;
