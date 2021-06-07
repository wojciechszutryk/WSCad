import styled from "styled-components";

export const SheetStyles = styled.div`
  height: ${props => props.sheetHeight}px;
  width: ${props => props.sheetWidth}px;
  background-color: transparent;
  cursor: ${props => props.cursorOverall};
  & svg{
    & *:hover{
      cursor: ${props => props.cursorHover};
      opacity: ${props => props.cursorHover !== 'default' ? 0.6 : 1};
    }
  }
`;

export const WorkspaceWrapper = styled.div`
  position: absolute;
  width: ${props => Math.max(props.sheetWidth,props.sheetWidth)}px;
  background-color: ${({theme}) => theme.paper.normal};
  top: ${props => props.offsetY}px;
  bottom: 10px;
  left: ${props => props.offsetX}px;
`;

export const BorderIndicatorElementsWrapper = styled.div`
  position: fixed;
  display: flex;
  font-size: 12px;
  top: ${props => props.offsetY}px;
  left: ${props => props.offsetX}px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  text-align: center;
  background-color: ${({theme}) => theme.paper.hover};
  color: ${({theme}) => theme.font.dark};
  &:first-child{
    line-height: 12px;
    text-align: right;
    z-index: 1;
  }
  &:nth-child(2){
    line-height: 12px;
    top: ${props => props.offsetY}px;
    text-align: right;
    z-index: 3;
  }
  &:nth-child(3){
    flex-direction: column;
    z-index: 2;
  }
  &:nth-child(4){
    flex-direction: column;
    left: ${props => props.offsetX}px;
    z-index: 4;
  }
`;

export const VerticalBorderIndicatorElement = styled.div`
  box-sizing: border-box;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  border-top: 1px solid ${({theme}) => theme.font.dark};
  font-family: sans-serif;
  &:last-child, &:first-child{
    border: none;
  }
`;

export const HorizontalBorderIndicatorElement = styled(VerticalBorderIndicatorElement)`
  border-top: none;
  border-right: 1px solid ${({theme}) => theme.font.dark};
  &:nth-child(21), &:nth-child(29){
    z-index: 9;
    border: none;
  }
  &:first-child{
    border-right: 1px solid ${({theme}) => theme.font.dark};
  }
`;

export const IndicatorHorizontal = styled.div`
  position: absolute;
  top: 0;
  left: ${props => props.left}px;
  width: 2px;
  height: 15px;
  background-color: red;
  z-index: 7;
`;

export const IndicatorVertical = styled(IndicatorHorizontal)`
  top: ${props => props.top}px;
  left: 0;
  width: 15px;
  height: 2px;
`;