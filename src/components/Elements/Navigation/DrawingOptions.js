import React from 'react';
import {connect} from "react-redux";
import {ButtonsWrapper} from "./NavigationStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGripLines, faTrash,  faDrawPolygon, faBezierCurve, faFont, faSquare, faCircle, faMousePointer} from "@fortawesome/free-solid-svg-icons";
import {NormalButton} from "../../styleComponents/ButtonStyles";
import {setDrawing} from "../../../data/actions/applicationActions/applicationActions";

const DrawingOptions = ({setDrawing}) => {
    return (
        <ButtonsWrapper>
            <NormalButton>
                <FontAwesomeIcon icon={faMousePointer} onClick={() => setDrawing('select')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faTrash} onClick={() => setDrawing('delete')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faGripLines} onClick={() => setDrawing('line')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faDrawPolygon} onClick={() => setDrawing('polyLine')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faBezierCurve} onClick={() => setDrawing('curve')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faSquare} onClick={() => setDrawing('rectangle')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faCircle} onClick={() => setDrawing('circle')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faFont} onClick={() => setDrawing('text')} className={'innerIcon'}/>
            </NormalButton>
        </ButtonsWrapper>
    );
};

const ConnectedDrawingOptions = connect(null,
    {
        setDrawing,
    }
)(DrawingOptions);

export default ConnectedDrawingOptions;