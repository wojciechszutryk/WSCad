import React, {useMemo} from 'react';

const CurveSVG = ({id,
                color= 'red',
                linePattern = null,
                lineWidth = 1,
                d="M100,250 C100,100 400,100 400,250",
                fillColor = 'transparent',
                onClick}) => {

    const curveStyle = useMemo(() => ({
        stroke: color,
        strokeWidth: lineWidth,
        strokeDasharray: linePattern,
        fill: fillColor,
    }), [color, lineWidth, linePattern, fillColor]);

    return (
        <path
            id={id}
            style={curveStyle}
            d={d}
            onClick={onClick}
        />
    );
};

export default CurveSVG;
