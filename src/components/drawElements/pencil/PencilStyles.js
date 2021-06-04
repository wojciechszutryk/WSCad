import styled from "styled-components";

export const Canvas = styled.canvas`
  height: ${props => props.sheetHeight}px;
  width: ${props => props.sheetWidth}px;
  transform: translateY(${props => props.sheetHeight*(-1)}px);
  background-color: transparent;
  z-index: ${props => props.drawing === 'pencil' ? 1 : -1};
  cursor: url("https://cdn.glitch.com/3f14db12-a1c8-462c-b3ae-ad21206e72ee%2Fpointer.png?v=1622831727631"), auto;`;