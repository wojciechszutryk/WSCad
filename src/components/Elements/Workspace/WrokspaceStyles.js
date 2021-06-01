import styled from "styled-components";

export const SheetStyles = styled.div`
  height: ${props => props.sheetHeight}px;
  width: ${props => props.sheetWidth}px;
  background-color: ${({theme}) => theme.paper.normal};
`;

export const WorkspaceWrapper = styled.div`
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: ${props => props.offset}px;
  overflow: hidden;
`;
