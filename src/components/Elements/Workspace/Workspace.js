import React from 'react';
import {Sheet, WorkspaceWrapper} from "./WrokspaceStyles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PolyLine from "../../drawElements/polyLine";
import Line from "../../drawElements/line";
import {connect} from "react-redux";

const Workspace = ({offset,sheetWidth,sheetHeight}) => {
    const wheel = (e) => {
        console.log(e)
    }
    return (
        <WorkspaceWrapper offset={offset+30} onScroll={wheel}>
            <TransformWrapper>
                <TransformComponent>
                    <Sheet onClick={wheel} sheetWidth={sheetWidth} sheetHeight={sheetHeight}/>
                </TransformComponent>
            </TransformWrapper>
        </WorkspaceWrapper>
    );
};

const ConnectedWorkspace = connect(state => ({
        offset: state.application.sheetOffset,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
    }),null
)(Workspace);

export default ConnectedWorkspace;
