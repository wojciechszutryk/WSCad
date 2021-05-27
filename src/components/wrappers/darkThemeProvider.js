import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import {darkTheme, lightTheme} from "../../theme/themes";

const DarkThemeProvider = ({ children }) => {
    const darkThemeEnabled = useSelector((state) => state.application.darkTheme);
    return (
        <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    );
};

export default DarkThemeProvider;