import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import {addText} from "../../../data/actions/drawingActions/drawingActions";
import {connect} from "react-redux";
import {setDrawing} from "../../../data/actions/applicationActions/applicationActions";
import TextSVG from "../../sheetElements/text";

const Text = ({id, color, fontSize, lineWidth, texts, addText, offsetX, offsetY, sheetWidth, sheetHeight, drawing, setDrawing}) => {
    const pointsValue = useRef([]);
    const textToWrite = useRef('');
    const [, setTextState] = useState('');
    const [pointPosition, setPointPosition] = useState([]);
    const cursorPosition = useMousePosition(offsetX,offsetY);

    useEffect(() => {
        const setFromEvent = (e) => {
            if (e.clientX < offsetX + sheetWidth && e.clientX > offsetX &&
                e.clientY < offsetY + sheetHeight && e.clientY > offsetY) pointsValue.current.push({x: e.clientX-offsetX, y: e.clientY-offsetY});
            const escapeFunction = () => {
                setPointPosition([pointsValue.current[0]])
                const e = {};
                e.code = 'Escape'
                handleKeyInput(e);
            }
            if (pointsValue.current.length === 2) return escapeFunction();
            return setPointPosition([...pointsValue.current])
        }
        const handleKeyInput = (e) => {
            const finish = () => {
                window.removeEventListener("click", setFromEvent);
                window.removeEventListener("keydown", handleKeyInput);
                const [text, styles] = [{}, {color, fontSize, lineWidth}];
                text['point'] = pointsValue.current;
                text['styles'] = styles;
                text['id'] = id;
                text['text'] = textToWrite.current;
                addText(text);
                setDrawing('');
            }
            const setText = (e) => {
                let text = '';
                if (e.code === 'Backspace') text = textToWrite.current.slice(0,-1);
                else text =  textToWrite.current + e.key;
                textToWrite.current = text;
                setTextState(text);
            }
            if ((e && e.code === 'Escape') || e.code === 'Enter') return finish();
            else if (e && e.code) return setText(e);
        }
        window.addEventListener("click", setFromEvent);
        window.addEventListener("keydown", handleKeyInput);

        return () => {
            setDrawing('');
            window.removeEventListener("click", setFromEvent);
            window.removeEventListener("keydown", handleKeyInput);
        };
    }, [id, setDrawing, addText, color, lineWidth, fontSize, texts.length, offsetX, sheetHeight, sheetWidth, offsetY]);

    let textToDraw = null;
    if (drawing === '') textToDraw = null;
    else if (pointPosition.length === 1) textToDraw = (
        <TextSVG
            pointX = {pointPosition[0].x}
            pointY = {pointPosition[0].y}
            fontSize = {fontSize}
            text = {textToWrite.current}
            color= {color}
            lineWidth = {lineWidth}
            writing = {true}
        />)
    else if (pointPosition.length === 0) textToDraw = (
        <TextSVG
            pointX = {cursorPosition.x}
            pointY = {cursorPosition.y}
            fontSize = {fontSize}
            text = {textToWrite.current}
            color= {color}
            lineWidth = {lineWidth}
            writing = {true}
        />)

    return (
        textToDraw
    )
};

const ConnectedText = connect(state => ({
        drawing: state.application.drawing,
        offsetX: state.application.sheetOffsetX,
        offsetY: state.application.sheetOffsetY,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
        texts: state.elements.texts,
        color: state.style.color,
        lineWidth: state.style.lineWidth,
        fontSize: state.style.fontSize,
    }),
    {
        addText,
        setDrawing,
    }
)(Text);

export default ConnectedText;
