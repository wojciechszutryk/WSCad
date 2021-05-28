import React from 'react';
import {Sheet, WorkspaceWrapper} from "./WrokspaceStyles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PolyLine from "../../drawElements/polyLine";
import Line from "../../drawElements/line";

const Workspace = () => {
    return (
        <WorkspaceWrapper>
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

export default Workspace;
