import styled from "styled-components";

export const Dragger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20px;
  cursor: all-scroll;
  background-color: ${({theme}) => theme.color.normal};
  opacity: 1;
  transition: opacity .1s;
`;