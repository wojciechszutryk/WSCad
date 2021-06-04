import React from 'react';

const ImageSVG = ({id,
                positionX = 0,
                positionY = 0,
                width= 209,
                height= 88,
                href= 'https://cdn.glitch.com/2cef3d17-5f0d-45a1-97f2-e93ce8b3a199%2FWSCAD.png?v=1622829749664',
                onClick}) => {

    return (
        <image
            id={id}
            href={href}
            x={positionX}
            y={positionY}
            width={width}
            height={height}
            onClick={onClick}
        />
    )
};

export default ImageSVG;
