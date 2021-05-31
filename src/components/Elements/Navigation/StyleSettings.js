import React, {useState} from 'react';
import {connect} from "react-redux";
import {setColor, setFontSize, setLineWidth, setPattern} from "../../../data/actions/styleActions/styleActions";
import LineSVG from "../line";
import Select from "../../styleComponents/Select/Select";
import {ColorInput, NumberInput} from "../../styleComponents/Inputs";
import {StyleButtonsWrapper} from "./NavigationStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBorderStyle, faSlidersH} from "@fortawesome/free-solid-svg-icons";

const StyleSettings = ({color, fontSize, pattern, lineWidth,
                       setFontSize, setColor, setPattern, setLineWidth}) => {

    const [, setC] = useState(color);
    const [, setFz] = useState(fontSize);
    const [, setP] = useState(pattern);
    const [, setLw] = useState(lineWidth);

    const patternOptions = [
        { line: <LineSVG
                color={color} linePattern={''} lineWidth={lineWidth} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0} canvasHeight={30} canvasWidth={70}
            />, onSelect: () => handlePatternSelect('') },
        { line: <LineSVG
                color={color} linePattern={'5'} lineWidth={lineWidth} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0} canvasHeight={30} canvasWidth={70}
            />, onSelect: () => handlePatternSelect("5") },
        { line: <LineSVG
                color={color} linePattern={'10'} lineWidth={lineWidth} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0} canvasHeight={30} canvasWidth={70}
            />, onSelect: () => handlePatternSelect('10') },
        { line: <LineSVG
                color={color} linePattern={'20'} lineWidth={lineWidth} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0} canvasHeight={30} canvasWidth={70}
            />, onSelect: () => handlePatternSelect('20') },
    ]

    const lineWidthOptions = [
        { line: <LineSVG
                color={color} linePattern={''} lineWidth={1} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0} canvasHeight={30} canvasWidth={70}
            />, onSelect: () => handleLineWidthSelect(1) },
        { line: <LineSVG
                color={color} linePattern={''} lineWidth={2} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0} canvasHeight={30} canvasWidth={70}
            />, onSelect: () => handleLineWidthSelect(2) },
        { line: <LineSVG
                color={color} linePattern={''} lineWidth={5} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0} canvasHeight={30} canvasWidth={70}
            />, onSelect: () => handleLineWidthSelect(5) },
        { line: <LineSVG
                color={color} linePattern={''} lineWidth={10} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0} canvasHeight={30} canvasWidth={70}
            />, onSelect: () => handleLineWidthSelect(10) },
    ]
    const handlePatternSelect = (pattern) => {
        setP(pattern)
        setPattern(pattern)
    }
    const handleLineWidthSelect = (pattern) => {
        setLw(pattern)
        setLineWidth(pattern)
    }
    const handleColorChange = (e) => {
        setC(e.target.value)
        setColor(e.target.value)
    }
    const handleFontSizeChange = (e) => {
        setFz(e.target.value)
        setFontSize(e.target.value)
    }

    return (
        <StyleButtonsWrapper>
            <ColorInput type="color" onChange={handleColorChange} value={color}/>
            <NumberInput type="number" min={0} max={72} placeholder={'T'} onChange={handleFontSizeChange}/>
            <Select options={patternOptions} left={true}>
                <FontAwesomeIcon icon={faBorderStyle} className={'innerIcon'}/>
            </Select>
            <Select options={lineWidthOptions}>
                <FontAwesomeIcon icon={faSlidersH} className={'innerIcon'}/>
            </Select>
        </StyleButtonsWrapper>
    );
};

const ConnectedStyleSettings = connect(state => ({
        color: state.style.color,
        fontSize: state.style.fontSize,
        pattern: state.style.pattern,
        lineWidth: state.style.lineWidth,
    }),
    {
        setFontSize,
        setColor,
        setPattern,
        setLineWidth
    }
)(StyleSettings);

export default ConnectedStyleSettings;
