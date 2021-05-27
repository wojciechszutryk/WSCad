import styled from "styled-components";

export const StyledLogo = styled.div`
  position: absolute;
  top: 1%;
  left: 2%;
  opacity: 0.5;
  font-size: 7vh;
  & span:first-child{
    color: ${({theme}) => theme.color.normal};
    font-family: 'Trebuchet MS' , Roboto, sans-serif;
    font-weight: 500;
  }
  & span:nth-child(2){
    color: ${({theme}) => theme.color.dark};
    font-family: 'Brush Script MT', serif;
  }
`;