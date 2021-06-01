import React from 'react';
import {SheetStyles} from "./WrokspaceStyles";

const Sheet = ({sheetWidth, sheetHeight, children}) => {
    return (
        <SheetStyles sheetWidth={sheetWidth} sheetHeight={sheetHeight}>
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
