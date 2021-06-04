import styled from "styled-components";

export const Canvas = styled.canvas`
  height: ${props => props.sheetHeight}px;
  width: ${props => props.sheetWidth}px;
  transform: translateY(${props => props.sheetHeight*(-1)}px);
  background-color: transparent;
  z-index: ${props => props.drawing === 'pencil' ? 1 : -1};
`;