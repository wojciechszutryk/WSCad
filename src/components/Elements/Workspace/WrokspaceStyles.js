import styled from "styled-components";

export const Sheet = styled.div`
  height: 29.7cm;
  width: 21cm;
  background-color: ${({theme}) => theme.paper.normal};
`;

export const WorkspaceWrapper = styled.div`
  position: absolute;
  top: 10px;
  bottom: 1%;
  left: ${props => props.width}px;
  overflow: hidden;
`;
