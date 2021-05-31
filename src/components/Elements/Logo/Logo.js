import React from 'react';
import {StyledLogo} from "./LogoStyles";
import {connect} from "react-redux";

const Logo = ({width}) => {
    return (
        <StyledLogo width={width}>
            <span>WS</span>
            <span>Cad</span>
        </StyledLogo>
    );
};

const ConnectedLogo = connect(state => ({
        width: state.application.sheetOffset,
    }),null
)(Logo);

export default ConnectedLogo;
