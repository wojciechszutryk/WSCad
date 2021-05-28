import React, {useState} from 'react';
import {connect} from "react-redux";
import {setColor, setFontSize, setLineWidth, setPattern} from "../../../data/actions/styleActions/styleActions";
import LineSVG from "../line";
import Select from "../../inputs/Select/Select";

const StyleSettings = ({color, fontSize, pattern, lineWidth,
                       setFontSize, setColor, setPattern, setLineWidth}) => {

    const [, setC] = useState(color);
    const [, setFz] = useState(fontSize);
    const [, setP] = useState(pattern);
    const [, setlW] = useState(lineWidth);

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
    const handlePatternSelect = (pattern) => {
        setP(pattern)
        setPattern(pattern)
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
        <div>
            <input type="color" onChange={handleColorChange}/>
            <input type="number" min={0} max={72} placeholder={'font'} onChange={handleFontSizeChange}/>
            <Select options={patternOptions} />
            {/*<Select options={options} />*/}
            <LineSVG
                color={color} linePattern={pattern} lineWidth={lineWidth*20} firstPointX={0} firstPointY={0} secondPointX={70} secondPointY={0} canvasHeight={30} canvasWidth={70}
            />
        </div>
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
