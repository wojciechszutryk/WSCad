import React from 'react';
import {connect} from "react-redux";
import {ButtonsWrapper} from "./NavigationStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGripLines, faTrash, faImage, faPencilAlt, faDrawPolygon, faBezierCurve, faFont, faSquare, faCircle, faMousePointer} from "@fortawesome/free-solid-svg-icons";
import {NormalButton} from "../../styleComponents/ButtonStyles";
import {setDrawing} from "../../../data/actions/applicationActions/applicationActions";

const DrawingOptions = ({setDrawing, drawing}) => {
    return (
        <ButtonsWrapper>
            <NormalButton className={drawing === 'select' ? 'selected' : null}>
                <FontAwesomeIcon icon={faMousePointer} onClick={() => setDrawing('select')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton className={drawing === 'delete' ? 'selected' : null}>
                <FontAwesomeIcon icon={faTrash} onClick={() => setDrawing('delete')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton className={drawing === 'line' ? 'selected' : null}>
                <FontAwesomeIcon icon={faGripLines} onClick={() => setDrawing('line')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton className={drawing === 'polyLine' ? 'selected' : null}>
                <FontAwesomeIcon icon={faDrawPolygon} onClick={() => setDrawing('polyLine')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton className={drawing === 'curve' ? 'selected' : null}>
                <FontAwesomeIcon icon={faBezierCurve} onClick={() => setDrawing('curve')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton className={drawing === 'rect' ? 'selected' : null}>
                <FontAwesomeIcon icon={faSquare} onClick={() => setDrawing('rect')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton className={drawing === 'circle' ? 'selected' : null}>
                <FontAwesomeIcon icon={faCircle} onClick={() => setDrawing('circle')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton className={drawing === 'pencil' ? 'selected' : null}>
                <FontAwesomeIcon icon={faPencilAlt} onClick={() => setDrawing('pencil')} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton className={drawing === 'image' ? 'selected' : null}>
                <FontAwesomeIcon icon={faImage} onClick={() => setDrawing('image')} className={'innerIcon'}/>
            </NormalButton>
        </ButtonsWrapper>
    );
};

const ConnectedDrawingOptions = connect(state => ({
        drawing: state.application.drawing,
    }),
    {

        setDrawing,
    }
)(DrawingOptions);

export default ConnectedDrawingOptions;