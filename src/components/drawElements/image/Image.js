import React, {useState, useEffect, useRef} from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import {addImage} from "../../../data/actions/drawingActions/drawingActions";
import {connect} from "react-redux";
import {setDrawing} from "../../../data/actions/applicationActions/applicationActions";
import ImageSVG from "../../sheetElements/image/ImageSVG";

const Image = ({id, offsetX, offsetY, sheetWidth, sheetHeight, drawing, setDrawing, addImage}) => {
    const cursorPosition = useMousePosition(offsetX,offsetY);
    const pointsValue = useRef([]);
    const [pointsPosition, setPointsPosition] = useState([]);

    useEffect(() => {
        const setFromEvent = (e) => {
            if (e.clientX < offsetX + sheetWidth && e.clientX > offsetX &&
                e.clientY < offsetY + sheetHeight && e.clientY > offsetY) pointsValue.current.push({x: e.clientX-offsetX, y: e.clientY-offsetY});
            const escapeFunction = () => {
                setPointsPosition([...pointsValue.current])
                stopDrawing()
            }
            if (pointsValue.current.length === 2) return escapeFunction();
            return setPointsPosition([...pointsValue.current])
        }
        const stopDrawing = (e) => {
            const clean = () => {
                window.removeEventListener("click", setFromEvent);
                window.removeEventListener("keydown", stopDrawing);
                setDrawing('');
            }
            const finish = () => {
                window.removeEventListener("click", setFromEvent);
                window.removeEventListener("keydown", stopDrawing);
                if (document.querySelector('input.form__field').value){
                    const image = {};
                    image['point'] = {x: Math.min(pointsValue.current[0].x,pointsValue.current[1].x), y:Math.min(pointsValue.current[0].y,pointsValue.current[1].y)};
                    image['width'] = Math.abs(pointsValue.current[0].x - pointsValue.current[1].x)
                    image['height'] = Math.abs(pointsValue.current[0].y - pointsValue.current[1].y)
                    image['id'] = id;
                    image['href'] = document.querySelector('input.form__field').value;
                    addImage(image);
                }
                setDrawing('');
            }
            if (e && e.code === 'Escape') return clean();
            else if (!e) return finish();
        }
        window.addEventListener("click", setFromEvent);
        window.addEventListener("keydown", stopDrawing);

        return () => {
            setDrawing('');
            window.removeEventListener("click", setFromEvent);
            window.removeEventListener("keydown", stopDrawing);
        };
    }, [setDrawing, offsetX, sheetHeight, sheetWidth, offsetY, id, addImage]);

    let imageToDraw = null;
    if (drawing === '') imageToDraw = null;
    else if (pointsPosition.length === 2) {
        imageToDraw = (
            <ImageSVG
                positionX = {Math.min(pointsPosition[0].x,pointsPosition[1].x)}
                positionY = {Math.min(pointsPosition[0].y,pointsPosition[1].y)}
                width = {Math.abs(pointsPosition[0].x - pointsPosition[1].x)}
                height = {Math.abs(pointsPosition[0].y - pointsPosition[1].y)}
                href={document.querySelector('input.form__field').value}
            />)
    }
    else if (pointsPosition.length === 1) {
        imageToDraw = (
            <ImageSVG
                positionX = {Math.min(pointsPosition[0].x, cursorPosition.x)}
                positionY = {Math.min(pointsPosition[0].y, cursorPosition.y)}
                width = {Math.abs(cursorPosition.x - pointsPosition[0].x)}
                height = {Math.abs(cursorPosition.y - pointsPosition[0].y)}
                href={document.querySelector('input.form__field').value}
            />)
    }

    return (
        imageToDraw
    )
};

const ConnectedImage = connect(state => ({
        drawing: state.application.drawing,
        offsetX: state.application.sheetOffsetX,
        offsetY: state.application.sheetOffsetY,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
    }),
    {
        setDrawing,
        addImage,
    }
)(Image);

export default ConnectedImage;