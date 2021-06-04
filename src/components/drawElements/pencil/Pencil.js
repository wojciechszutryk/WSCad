import React, {useEffect, useRef} from 'react';
import {connect} from "react-redux";
import {addLine} from "../../../data/actions/drawingActions/drawingActions";
import {setDrawing} from "../../../data/actions/applicationActions/applicationActions";
import {Canvas} from "./PencilStyles";

const Pencil = ({color, lineWidth, offset, sheetWidth, sheetHeight, setDrawing}) => {
    const offsetX = offset+30;
    const offsetY = 10;
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let coord = { x: 0, y: 0 };

    useEffect(() => {
        resize();
    },[])

        function reposition(event) {
            coord.x = event.clientX - canvas.offsetLeft - offsetX;
            coord.y = event.clientY - canvas.offsetTop + sheetHeight - offsetY;
        }
        function start(event) {
            document.addEventListener("mousemove", draw);
            reposition(event);
        }
        function stop() {
            document.removeEventListener("mousemove", draw);
        }
        function draw(event) {
            ctx.beginPath();
            ctx.lineWidth = lineWidth;
            ctx.lineCap = "round";
            ctx.strokeStyle = color;
            ctx.moveTo(coord.x, coord.y);
            reposition(event);
            ctx.lineTo(coord.x, coord.y);
            ctx.stroke();
        }
        const finishDrawing = (e) => {
            const finish = () => {
                document.removeEventListener("mousedown", start);
                document.removeEventListener("mouseup", stop);
                window.removeEventListener("keydown", finishDrawing);
                setDrawing('');
            }
            if (e && e.code === 'Escape') return finish();
        }
        function resize() {
            ctx.canvas.width = sheetWidth;
            ctx.canvas.height = sheetHeight;
        }
        document.addEventListener("mousedown", start);
        document.addEventListener("mouseup", stop);
        window.addEventListener("keydown", finishDrawing);

    return null
};

const ConnectedPencil = connect(state => ({
        drawing: state.application.drawing,
        offset: state.application.sheetOffset,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
        lines: state.elements.lines,
        color: state.style.color,
        pattern: state.style.pattern,
        lineWidth: state.style.lineWidth,
    }),
    {
        addLine,
        setDrawing,
    }
)(Pencil);

export default ConnectedPencil;