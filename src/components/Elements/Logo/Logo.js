import React from 'react';
import {StyledLogo} from "./LogoStyles";
import {connect} from "react-redux";

const Logo = ({width}) => {
    return (
        <StyledLogo width={width-30}>
            <span>WS</span>
            <span>Cad</span>
        </StyledLogo>
    );
};

const ConnectedLogo = connect(state => ({
        width: state.application.sheetOffsetX,
    }),null
)(Logo);

export default ConnectedLogo;
