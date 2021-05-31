import React from 'react';
import {Sheet, WorkspaceWrapper} from "./WrokspaceStyles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PolyLine from "../../drawElements/polyLine";
import Line from "../../drawElements/line";
import {connect} from "react-redux";

const Workspace = ({width}) => {
    console.log(width)
    return (
        <WorkspaceWrapper width={width+30}>
            <TransformWrapper>
                <TransformComponent>
                    <Sheet/>
                    {/*<Line/>*/}
                    <PolyLine/>
                </TransformComponent>
            </TransformWrapper>
        </WorkspaceWrapper>
    );
};

const ConnectedWorkspace = connect(state => ({
        width: state.application.sheetOffset,
    }),null
)(Workspace);

export default ConnectedWorkspace;
