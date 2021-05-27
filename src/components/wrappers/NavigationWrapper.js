import styled from "styled-components";

export const NavigationWrapper = styled.section`
  position: absolute;
  top: 10px;
  left: calc(50% - 250px);
  width: 500px;
  min-height: 50px;
  background-color: ${({theme}) => theme.background.dark};
  border: 3px solid ${({theme}) => theme.color.normal};
`;