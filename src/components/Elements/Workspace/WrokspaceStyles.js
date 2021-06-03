import styled from "styled-components";

export const SheetStyles = styled.div`
  height: ${props => props.sheetHeight}px;
  width: ${props => props.sheetWidth}px;
  background-color: ${({theme}) => theme.paper.normal};
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
  top: 10px;
  bottom: 10px;
  left: ${props => props.offset}px;
`;
