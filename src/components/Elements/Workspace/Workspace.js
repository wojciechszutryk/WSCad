import React from 'react';
import {Sheet, WorkspaceWrapper} from "./WrokspaceStyles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PolyLine from "../../drawElements/polyLine";

const Workspace = () => {
    return (
        <WorkspaceWrapper>
            <TransformWrapper style={{width: '200px', overflow: 'hidden'}}>
                <TransformComponent minScale={0.5}>
                    <Sheet/>
                    <PolyLine/>
                </TransformComponent>
            </TransformWrapper>
        </WorkspaceWrapper>
    );
};

export default Workspace;
