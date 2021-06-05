import React from 'react';
import {ButtonsWrapper} from "./NavigationStyles";
import {NormalButton, SetDarkButton, SetLightButton} from "../../styleComponents/ButtonStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRulerCombined} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {toggleIndicator} from "../../../data/actions/applicationActions/applicationActions";

const PageSettings = ({toggleIndicator, indicator}) => {
    return (
        <ButtonsWrapper>
            <NormalButton className={indicator ? 'selected' : null}>
                <FontAwesomeIcon icon={faRulerCombined} onClick={() => toggleIndicator()} className={'innerIcon'}/>
            </NormalButton>
        </ButtonsWrapper>
    );
};

const ConnectedPageSettings = connect(state => ({
        indicator: state.application.indicator,
    }),
    {
        toggleIndicator,
    }
)(PageSettings);

export default ConnectedPageSettings;
