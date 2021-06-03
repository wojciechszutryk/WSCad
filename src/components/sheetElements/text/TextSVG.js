import React, {useMemo} from 'react';

const TextSVG = ({id,
                color= 'red',
                lineWidth = 2,
                pointX = 0,
                fontSize = 13,
                pointY = 0,
                font = 'Courier New',
                text = 'text',
                writing = false,
                onClick}) => {

    let fontWeight = '';
    switch (lineWidth) {
        case 1: fontWeight = 'italic'; break;
        case 2: fontWeight = 'lighter'; break;
        case 10: fontWeight = 'bold'; break;
        default: fontWeight = 'normal'; break;
    }

    const fontStyle = useMemo(() => ({
        font: fontWeight + ' ' + fontSize + 'px ' + font,
        fill: color
    }), [color, fontWeight, font, fontSize]);

    return (
        <text
            id={id}
            x={pointX}
            y={pointY}
            style={fontStyle}
            onClick={onClick}
        >
            {text}
        </text>
    )
};

export default TextSVG;
