import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud, faInfo} from '@fortawesome/free-solid-svg-icons'
import {connect} from "react-redux";
import {themeToggle} from "../../../data/actions/applicationActions/applicationActions";
import {NormalButton, SetDarkButton, SetLightButton} from "../../styleComponents/ButtonStyles";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";
import {ButtonsWrapper, Information} from "./NavigationStyles";

const AppSettings = ({darkTheme, themeToggle, resetMinimized}) => {
    const [information, setInformation] = useState(false);
    const handleThemeChange = () => {
        themeToggle();
        resetMinimized([true, true, true, true]);
    }

    return (
        <ButtonsWrapper>
            {darkTheme ?
                <SetLightButton onClick={handleThemeChange}><FontAwesomeIcon icon={faCloud} /><FontAwesomeIcon icon={faSun} /></SetLightButton> :
                <SetDarkButton onClick={handleThemeChange}><FontAwesomeIcon icon={faCloud} /><FontAwesomeIcon icon={faMoon} /></SetDarkButton>
            }
            <div style={{position: 'relative'}}>
                <NormalButton className={information ? 'selected' : ''}>
                    <FontAwesomeIcon icon={faInfo} onClick={() => setInformation(!information)} className={'innerIcon'}/>
                </NormalButton>
                {information ?
                    <Information>
                        To draw element select it from drawing-menu. To cancel drawing press 'Escape'.
                    </Information>
                    : null}
            </div>
        </ButtonsWrapper>
    );
};

const ConnectedAppSettings = connect(state => ({
        darkTheme: state.application.darkTheme,}),
    {
        themeToggle,
    }
)(AppSettings);

export default ConnectedAppSettings;
