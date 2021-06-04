import React from 'react';
import {WorkspaceWrapper} from "./WrokspaceStyles";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import PolyLine from "../../drawElements/polyLine";
import Line from "../../drawElements/line";
import {connect} from "react-redux";
import LineSVG from "../../sheetElements/line";
import PolyLineSVG from "../../sheetElements/polyLine";
import Sheet from "./Sheet";
import {
    deleteCircle,
    deleteCurve, deleteImage,
    deleteLine,
    deleteRect,
    deleteText
} from "../../../data/actions/drawingActions/drawingActions";
import CircleSVG from "../../sheetElements/circle";
import Circle from "../../drawElements/circle/Circle";
import RectSVG from "../../sheetElements/rect";
import Rect from "../../drawElements/rect/Rect";
import Curve from "../../drawElements/curve/Curve";
import CurveSVG from "../../sheetElements/curve";
import Text from "../../drawElements/text";
import TextSVG from "../../sheetElements/text";
import Pencil from "../../drawElements/pencil";
import {Canvas} from "../../drawElements/pencil/PencilStyles";
import ImageSVG from "../../sheetElements/image/ImageSVG";
import Image from "../../drawElements/image";

const Workspace = ({drawing, drawings, offset, sheetWidth, sheetHeight, deleteImage, deleteLine, deleteCircle, deleteText, deleteRect, deleteCurve}) => {
    const lines = []
    const polyLines = []
    const circles = []
    const rects = []
    const curves = []
    const texts = []
    const images = []

    const handleOnClick = (id, type) => {
        const onSelect = (id) => {
            console.log('select '+id)
        }
        const onDelete = (id, type) => {
            switch (type) {
                case "circle": deleteCircle(id); break;
                case "rect": deleteRect(id); break;
                case "image": deleteImage(id); break;
                case "curve": deleteCurve(id); break;
                case "text": deleteText(id); break;
                default: deleteLine(id); break;
            }
        }
        if (drawing === 'select') return onSelect(id);
        else if (drawing === 'delete') return onDelete(id,type);
        else return () => {}
    }

    Object.entries(drawings).forEach(element => {
        if (element[0] === 'lines'){
            return element[1].forEach((line) => (
                lines.push(<LineSVG
                    id={line.id}
                    key={line.points[0].x*line.points[1].y}
                    color = {line.styles.color}
                    linePattern = {line.styles.pattern}
                    lineWidth = {line.styles.lineWidth}
                    firstPointX = {line.points[0].x}
                    firstPointY = {line.points[0].y}
                    secondPointX = {line.points[1].x}
                    secondPointY = {line.points[1].y}
                    onClick = {() => handleOnClick(line.id, 'line')}
                />)
            ))
        }
        if (element[0] === 'circles'){
            return element[1].forEach((circle) => (
                circles.push(<CircleSVG
                    id={circle.id}
                    key={circle.point.x*circle.point.y}
                    color = {circle.styles.color}
                    fillColor = {circle.styles.fillColor}
                    linePattern = {circle.styles.pattern}
                    lineWidth = {circle.styles.lineWidth}
                    centerX = {circle.point.x}
                    centerY = {circle.point.y}
                    radius = {circle.radius}
                    onClick = {() => handleOnClick(circle.id, 'circle')}
                />)
            ))
        }
        if (element[0] === 'rects'){
            return element[1].forEach((rect) => (
                rects.push(<RectSVG
                    id={rect.id}
                    key={rect.point.x*rect.point.y}
                    color = {rect.styles.color}
                    fillColor = {rect.styles.fillColor}
                    linePattern = {rect.styles.pattern}
                    lineWidth = {rect.styles.lineWidth}
                    positionX = {rect.point.x}
                    positionY = {rect.point.y}
                    width ={rect.width}
                    height ={rect.height}
                    onClick = {() => handleOnClick(rect.id, 'rect')}
                />)
            ))
        }
        if (element[0] === 'images'){
            return element[1].forEach((image) => (
                images.push(<ImageSVG
                    id={image.id}
                    key={image.point.x*image.point.y}
                    positionX = {image.point.x}
                    positionY = {image.point.y}
                    width ={image.width}
                    height ={image.height}
                    href ={image.href}
                    onClick = {() => handleOnClick(image.id, 'image')}
                />)
            ))
        }
        if (element[0] === 'polyLines'){
            return element[1].forEach((polyLine,index) => {
                polyLines.push(<PolyLineSVG
                    id={'polyLine__'+index}
                    key={polyLine.points[0].x*polyLine.points[1].y}
                    color = {polyLine.styles.color}
                    linePattern = {polyLine.styles.pattern}
                    lineWidth = {polyLine.styles.lineWidth}
                    points={polyLine.points}
                    onClick = {(id) => handleOnClick(id, 'line')}
                />)
            })
        }
        if (element[0] === 'curves'){
            return element[1].forEach((curve) => {
                curves.push(<CurveSVG
                    id={curve.id}
                    key={curve.d}
                    color = {curve.styles.color}
                    fillColor = {curve.styles.fillColor}
                    linePattern = {curve.styles.pattern}
                    lineWidth = {curve.styles.lineWidth}
                    d={curve.d}
                    onClick = {() => handleOnClick(curve.id, 'curve')}
                />)
            })
        }
        if (element[0] === 'texts'){
            return element[1].forEach((text) => {
                texts.push(<TextSVG
                    id={text.id}
                    key={text.text}
                    color = {text.styles.color}
                    fontSize = {text.styles.fontSize}
                    lineWidth = {text.styles.lineWidth}
                    pointX = {text.point[0].x}
                    pointY = {text.point[0].y}
                    text={text.text}
                    onClick = {() => handleOnClick(text.id, 'text')}
                />)
            })
        }
    })

    return (
        <WorkspaceWrapper offset={offset+30} sheetWidth={sheetWidth} sheetHeight={sheetHeight}>
            <TransformWrapper pan={drawing === 'curve' || drawing === 'pencil' ? {disabled: true} : {disabled: false}}>
                <TransformComponent>
                    <Sheet sheetWidth={sheetWidth} sheetHeight={sheetHeight} drawing={drawing}>
                        {images}
                        {rects}
                        {circles}
                        {texts}
                        {curves}
                        {polyLines}
                        {lines}
                        {drawing === 'image' && <Image id={'image__'+drawings.images.length}/>}
                        {drawing === 'rect' && <Rect id={'rect__'+drawings.rects.length}/>}
                        {drawing === 'circle' && <Circle id={'circle__'+drawings.circles.length}/>}
                        {drawing === 'text' && <Text id={'text__'+drawings.texts.length}/>}
                        {drawing === 'polyLine' && <PolyLine id={'line__'+drawings.lines.length}/>}
                        {drawing === 'line' && <Line id={'line__'+drawings.lines.length}/>}
                    </Sheet>
                    {drawing === 'curve' && <Curve id={'curve__'+drawings.curves.length}/>}
                    {drawing === 'pencil' && <Pencil/>}
                    <Canvas id="canvas" sheetHeight={sheetHeight} sheetWidth={sheetWidth} drawing={drawing}/>
                </TransformComponent>
            </TransformWrapper>
        </WorkspaceWrapper>
    );
};

const ConnectedWorkspace = connect(state => ({
        drawing: state.application.drawing,
        drawings: state.elements,
        offset: state.application.sheetOffset,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
    }), {
        deleteLine,
        deleteImage,
        deleteText,
        deleteCircle,
        deleteRect,
        deleteCurve,
    }
)(Workspace);

export default ConnectedWorkspace;
