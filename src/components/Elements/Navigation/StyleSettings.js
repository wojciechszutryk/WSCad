import React, {useState} from 'react';
import {connect} from "react-redux";
import {
    setColor,
    setFill,
    setFontSize,
    setLineWidth,
    setPattern
} from "../../../data/actions/styleActions/styleActions";
import LineSVG from "../../sheetElements/line";
import Select from "../../styleComponents/Select/Select";
import {ColorInput, NumberInput} from "../../styleComponents/Inputs";
import {ButtonsWrapper, StyleInfo} from "./NavigationStyles";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBorderStyle, faSlidersH} from "@fortawesome/free-solid-svg-icons";

const StyleSettings = ({color, fontSize, pattern, lineWidth, fill,
                       setFontSize, setColor, setPattern, setLineWidth, setFill}) => {

    const [, setC] = useState(color);
    const [, setFz] = useState(fontSize);
    const [, setP] = useState(pattern);
    const [, setLw] = useState(lineWidth);
    const [, setF] = useState(fill);
    const [fillFocus, setFillFocus] = useState(false);
    const [colorFocus, setColorFocus] = useState(false);

    const patternOptions = [
        { line: <LineSVG
                color={color} linePattern={''} lineWidth={lineWidth} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0}
            />, onSelect: () => handlePatternSelect('') },
        { line: <LineSVG
                color={color} linePattern={'5'} lineWidth={lineWidth} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0}
            />, onSelect: () => handlePatternSelect("5") },
        { line: <LineSVG
                color={color} linePattern={'10'} lineWidth={lineWidth} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0}
            />, onSelect: () => handlePatternSelect('10') },
        { line: <LineSVG
                color={color} linePattern={'20'} lineWidth={lineWidth} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0}
            />, onSelect: () => handlePatternSelect('20') },
    ]

    const lineWidthOptions = [
        { line: <LineSVG
                color={color} linePattern={''} lineWidth={1} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0}
            />, onSelect: () => handleLineWidthSelect(1) },
        { line: <LineSVG
                color={color} linePattern={''} lineWidth={2} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0}
            />, onSelect: () => handleLineWidthSelect(2) },
        { line: <LineSVG
                color={color} linePattern={''} lineWidth={5} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0}
            />, onSelect: () => handleLineWidthSelect(5) },
        { line: <LineSVG
                color={color} linePattern={''} lineWidth={10} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0}
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
        setColorFocus(false)
    }
    const handleFillChange = (e) => {
        setF(e.target.value)
        setFill(e.target.value)
        setFillFocus(false)
    }
    const handleFontSizeChange = (e) => {
        setFz(e.target.value)
        setFontSize(e.target.value)
    }

    return (
        <ButtonsWrapper>
            <ColorInput type="color" onChange={handleColorChange} value={color} onClick={() => {setColorFocus(!colorFocus)}}/>
                {colorFocus ? <StyleInfo className={'firstStyle'} onClick={() => {setColorFocus(false)}}>Line Color</StyleInfo> : null}
                {colorFocus ? <StyleInfo className={'secondStyle'} onClick={() => {setColor('transparent'); setColorFocus(false)}}>Transparent</StyleInfo> : null}
            <NumberInput type="number" min={0} max={72} placeholder={'T'} onChange={handleFontSizeChange}/>
            <Select options={patternOptions} left={true}>
                <FontAwesomeIcon icon={faBorderStyle} className={'innerIcon'}/>
            </Select>
            <Select options={lineWidthOptions}>
                <FontAwesomeIcon icon={faSlidersH} className={'innerIcon'}/>
            </Select>
            <ColorInput type="color" onChange={handleFillChange} value={fill} onClick={() => {setFillFocus(!fillFocus)}}/>
                {fillFocus ? <StyleInfo className={'thirdStyle'} onClick={() => {setFillFocus(false)}}>Fill Color</StyleInfo> : null}
                {fillFocus ? <StyleInfo className={'fourthStyle'} onClick={() => {setFill('transparent'); setFillFocus(false)}}>Transparent</StyleInfo> : null}
        </ButtonsWrapper>
    );
};

const ConnectedStyleSettings = connect(state => ({
        color: state.style.color,
        fill: state.style.fill,
        fontSize: state.style.fontSize,
        pattern: state.style.pattern,
        lineWidth: state.style.lineWidth,
    }),
    {
        setFontSize,
        setColor,
        setFill,
        setPattern,
        setLineWidth
    }
)(StyleSettings);

export default ConnectedStyleSettings;
