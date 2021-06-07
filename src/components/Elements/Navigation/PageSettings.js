import React from 'react';
import {ButtonsWrapper} from "./NavigationStyles";
import {NormalButton} from "../../styleComponents/ButtonStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRulerCombined, faSync, faPrint, faDownload, faUpload} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {toggleIndicator, toggleOrientation, setSheetWidth} from "../../../data/actions/applicationActions/applicationActions";

const PageSettings = ({toggleIndicator, indicator, toggleOrientation, sheetVertical, setSheetWidth, offsetX, offsetY, sheetWidth, sheetHeight}) => {

    const handleToggleSheet = () => {
        if (sheetVertical) {
            toggleOrientation()
            setSheetWidth((window.innerHeight-20)/1.4142857);
        }
        else{
            toggleOrientation()
            setSheetWidth((window.innerHeight-20)*1.4142857);
        }
    }

    const handlePrintSheet = () => {
        const prtContent = document.getElementById("sheet");
        const WinPrint = window.open('', 'PRINT', `left=${offsetX},top=${offsetY},width=${sheetWidth},height=${sheetHeight},toolbar=0,scrollbars=0,status=0`);
        WinPrint.document.write('<html><head><title>' + document.title  + '</title>');
        WinPrint.document.write('</head><body >');
        WinPrint.document.write(prtContent.innerHTML);
        WinPrint.document.write('</body></html>');
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
    }

    return (
        <ButtonsWrapper>
            <NormalButton className={indicator ? 'selected' : null}>
                <FontAwesomeIcon icon={faRulerCombined} onClick={() => toggleIndicator()} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faSync} onClick={handleToggleSheet} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faDownload} onClick={handleToggleSheet} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faUpload} onClick={handleToggleSheet} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faPrint} onClick={handlePrintSheet} className={'innerIcon'}/>
            </NormalButton>
        </ButtonsWrapper>
        
    );
};

const ConnectedPageSettings = connect(state => ({
        offsetX: state.application.sheetOffsetX,
        offsetY: state.application.sheetOffsetY,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
        indicator: state.application.indicator,
        sheetVertical: state.application.sheetVertical,
    }),
    {
        toggleIndicator,
        setSheetWidth,
        toggleOrientation,
    }
)(PageSettings);

export default ConnectedPageSettings;
