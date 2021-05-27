import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.background.normal};
`;