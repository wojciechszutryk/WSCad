import React, {useState} from 'react';
import {ButtonsWrapper, UploadFileInfo} from "./NavigationStyles";
import {NormalButton} from "../../styleComponents/ButtonStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRulerCombined, faSync, faPrint, faDownload, faUpload} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {
    setIndicator,
    toggleOrientation,
    setSheetWidth,
    setSheetHeight, setSheetOffsetY, setSheetOffsetX
} from "../../../data/actions/applicationActions/applicationActions";
import { save } from 'save-file';
import {
    addCircle,
    addCurve,
    addImage,
    addLine,
    addRect,
    addText, loadData
} from "../../../data/actions/drawingActions/drawingActions";
import {FileInput} from "../../styleComponents/Inputs";
import {faFileCode} from "@fortawesome/free-regular-svg-icons";

const PageSettings = ({setIndicator, indicator,
                    toggleOrientation, sheetVertical, setSheetWidth, setSheetHeight, offsetX, offsetY, setSheetOffsetY, setSheetOffsetX, sheetWidth, sheetHeight,
                    drawings, loadData
                    }) => {

    const [upload, setUpload] = useState(false);

    const handleToggleSheet = () => {
        if (sheetVertical) {
            toggleOrientation()
            setSheetWidth((window.innerHeight-20)/1.4142857);
            setSheetHeight(window.innerHeight-20);
            setSheetOffsetY(10)
            // setSheetOffsetX(Math.min(window.innerWidth*0.2+30, 230))
            setSheetOffsetX((window.innerWidth-(window.innerHeight-20)/1.4142857)/2)
        }
        else{
            toggleOrientation()
            if ((window.innerWidth-20)/1.4142857 > window.innerHeight){
                setSheetOffsetX((window.innerWidth - (window.innerHeight-50)*1.4142857)/2);
                setSheetWidth((window.innerHeight-50)*1.4142857);
                setSheetHeight((window.innerHeight-50));
                setSheetOffsetY(25);
            }
            else{
                setSheetOffsetX(10);
                setSheetWidth((window.innerWidth-20));
                setSheetHeight((window.innerWidth-20)/1.4142857);
                setSheetOffsetY((window.innerHeight - (window.innerWidth-20)/1.4142857)/2);
            }
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
    };

    const handleSaveFile = () => {
        const date = new Date();
        save(JSON.stringify(drawings), 'WSCad_'+date.toLocaleDateString()+'.json');
    }

    const handleUploadFile = (event) => {
        const file = event.target.files[0];
        let reader = new FileReader();
        reader.addEventListener('load', function(e) {
            let text = e.target.result;
            const json = JSON.parse(text);
            loadData(json);
        });
        reader.readAsText(file);
        setUpload(false)
    }

    return (
        <ButtonsWrapper>
            <NormalButton className={indicator ? 'selected' : null}>
                <FontAwesomeIcon icon={faRulerCombined} onClick={() => setIndicator(!indicator)} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faSync} onClick={handleToggleSheet} className={'innerIcon'}/>
            </NormalButton>
            <NormalButton>
                <FontAwesomeIcon icon={faDownload} onClick={handleSaveFile} className={'innerIcon'}/>
            </NormalButton>
            <div style={{position: 'relative'}}>
                <NormalButton>
                    <FontAwesomeIcon icon={faUpload} onClick={() => {setUpload(!upload)}} className={'innerIcon'}/>
                </NormalButton>
                {upload && <FileInput onChange={handleUploadFile} type="file" accept=".json"/>}
                {upload && <UploadFileInfo><FontAwesomeIcon icon={faFileCode} onClick={() => setIndicator(!indicator)} className={'innerIcon'}/></UploadFileInfo>}
            </div>
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
        drawings: state.elements,
    }),
    {
        setIndicator,
        setSheetOffsetY,
        setSheetOffsetX,
        setSheetWidth,
        setSheetHeight,
        toggleOrientation,
        addCircle,
        addRect,
        addLine,
        addCurve,
        addText,
        addImage,
        loadData
    }
)(PageSettings);

export default ConnectedPageSettings;
