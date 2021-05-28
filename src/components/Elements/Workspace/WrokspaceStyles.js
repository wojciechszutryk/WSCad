import styled from "styled-components";

export const Sheet = styled.div`
  height: 29.7cm;
  width: 21cm;
  background-color: ${({theme}) => theme.paper.normal};
`;

export const WorkspaceWrapper = styled.div`
  position: absolute;
  top: 1%;
  bottom: 1%;
  left: 25vh;
  overflow: hidden;
`;
