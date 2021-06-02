import React from 'react';
import {SheetStyles} from "./WrokspaceStyles";

const Sheet = ({sheetWidth, sheetHeight, drawing, children}) => {
    let cursorOverall = 'default';
    let cursorHover = 'default';
    switch (drawing){
        case 'select':
            cursorHover = 'pointer'
            break;
        case 'delete':
            cursorHover = 'not-allowed'
            break;
        case '':
            cursorOverall = 'default'
            break;
        default:
            cursorOverall = 'crosshair'
    }
    return (
        <SheetStyles
            sheetWidth={sheetWidth}
            sheetHeight={sheetHeight}
            cursorHover={cursorHover}
            cursorOverall={cursorOverall}>
            <svg
                width={sheetWidth}
                height={sheetHeight}
                style={{position: 'fixed'}}>
                {children}
            </svg>
        </SheetStyles>
    );
};

export default Sheet;
