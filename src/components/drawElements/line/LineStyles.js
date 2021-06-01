import styled from "styled-components";

export const DrawElementWrapper = styled.div`
  height: ${props => props.sheetHeight}px;
  width: ${props => props.sheetWidth}px;
  background-color: ${({theme}) => theme.paper.normal};
`;