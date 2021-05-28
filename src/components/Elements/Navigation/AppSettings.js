import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import {themeToggle} from "../../../data/actions/applicationActions/applicationActions";
import {SetDarkButton, SetLightButton} from "../../styleComponents/ButtonStyles";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import {AppButtonsWrapper} from "./NavigationStyles";

const AppSettings = ({darkTheme, themeToggle, resetMinimized}) => {
    const handleThemeChange = () => {
        themeToggle();
        resetMinimized([false, false, false, false]);
    }

    return (
        <AppButtonsWrapper>
            {darkTheme ?
                <SetLightButton onClick={handleThemeChange}><FontAwesomeIcon icon={faCloud} /><FontAwesomeIcon icon={faSun} /></SetLightButton> :
                <SetDarkButton onClick={handleThemeChange}><FontAwesomeIcon icon={faCloud} /><FontAwesomeIcon icon={faMoon} /></SetDarkButton>
            }
        </AppButtonsWrapper>
    );
};

const ConnectedAppSettings = connect(state => ({
        darkTheme: state.application.darkTheme,}),
    {
        themeToggle,
    }
)(AppSettings);

export default ConnectedAppSettings;
