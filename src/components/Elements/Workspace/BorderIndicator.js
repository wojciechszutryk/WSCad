import React from 'react';
import {useMousePosition} from "../../../hooks/useMousePosition";
import {connect} from "react-redux";
import {
    BorderIndicatorElementsWrapper,
    HorizontalBorderIndicatorElement, IndicatorHorizontal, IndicatorVertical,
    VerticalBorderIndicatorElement
} from "./WrokspaceStyles";

const BorderIndicator = ({sheetWidth, sheetHeight, offset}) => {
    const offsetX = offset+30;
    const offsetY = 10;
    const cursorPosition = useMousePosition(offsetX,offsetY);
    const smallerArrayNumbers = [], largerArrayNumbers = [];
    let verticalBorderIndicators = [], horizontalBorderIndicators = [];

    let indicatorTop = 0;
    let indicatorleft = 0;
    if (cursorPosition.y > sheetHeight) indicatorTop = sheetHeight -2;
    else if (cursorPosition.y < 0) indicatorTop = 0;
    else indicatorTop = cursorPosition.y;
    if (cursorPosition.x > sheetWidth) indicatorleft = sheetWidth - 2;
    else if (cursorPosition.x < 0) indicatorleft = 0;
    else indicatorleft = cursorPosition.x;

    for(let i = 1; i <30; i++){
        if (i< 22) smallerArrayNumbers.push(i);
        largerArrayNumbers.push(i);
    }

    // smaller vertical larger horizontal
    if (sheetWidth < sheetHeight) {
        verticalBorderIndicators = largerArrayNumbers.map(number => (
            <VerticalBorderIndicatorElement key={number} width={15} height={sheetHeight/21}>
                {number}
            </VerticalBorderIndicatorElement>
        ))
        horizontalBorderIndicators = smallerArrayNumbers.map(number => (
            <HorizontalBorderIndicatorElement key={number} width={sheetWidth/21} height={15}>
                {number}
            </HorizontalBorderIndicatorElement>
        ))
    }
    // smaller horizontal larger vertical
    else{
        verticalBorderIndicators = smallerArrayNumbers.map(number => (
            <VerticalBorderIndicatorElement key={number} width={15} height={sheetHeight/21}>
                {number}
            </VerticalBorderIndicatorElement>
        ))
        horizontalBorderIndicators = largerArrayNumbers.map(number => (
            <HorizontalBorderIndicatorElement key={number} width={sheetWidth/21} height={15}>
                {number}
            </HorizontalBorderIndicatorElement>
        ))
    }

    return (
        <div>
            <BorderIndicatorElementsWrapper width={sheetWidth} height={15} offsetX={offsetX} offsetY={offsetY}>
                {horizontalBorderIndicators}
                <IndicatorHorizontal left={indicatorleft}/>
            </BorderIndicatorElementsWrapper>
            <BorderIndicatorElementsWrapper width={sheetWidth} height={15} offsetX={offsetX} offsetY={offsetY+sheetHeight-15}>
                {horizontalBorderIndicators}
                <IndicatorHorizontal left={indicatorleft}/>
            </BorderIndicatorElementsWrapper>
            <BorderIndicatorElementsWrapper width={15} height={sheetHeight} offsetX={offsetX} offsetY={offsetY}>
                {verticalBorderIndicators}
                <IndicatorVertical top={indicatorTop}/>
            </BorderIndicatorElementsWrapper>
            <BorderIndicatorElementsWrapper width={15} height={sheetHeight} offsetX={offsetX+sheetWidth-15} offsetY={offsetY}>
                {verticalBorderIndicators}
                <IndicatorVertical top={indicatorTop}/>
            </BorderIndicatorElementsWrapper>
        </div>

    );
};

const ConnectedBorderIndicator = connect(state => ({
        offset: state.application.sheetOffset,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
    })
)(BorderIndicator);

export default ConnectedBorderIndicator;
