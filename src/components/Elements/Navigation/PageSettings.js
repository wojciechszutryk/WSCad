import React from 'react';
import {ButtonsWrapper} from "./NavigationStyles";
import {NormalButton, SetDarkButton, SetLightButton} from "../../styleComponents/ButtonStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRulerCombined, faSync, faPrint, faDownload, faUpload} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {toggleIndicator, toggleOrientation, setSheetWidth} from "../../../data/actions/applicationActions/applicationActions";

const PageSettings = ({toggleIndicator, indicator, toggleOrientation, sheetVertical, setSheetWidth}) => {

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
                <FontAwesomeIcon icon={faPrint} onClick={handleToggleSheet} className={'innerIcon'}/>
            </NormalButton>
        </ButtonsWrapper>
        
    );
};

const ConnectedPageSettings = connect(state => ({
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
