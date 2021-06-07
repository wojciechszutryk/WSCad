import styled from "styled-components";

export const StyledLogo = styled.div`
  position: absolute;
  top: 5px;
  left: 15px;
  opacity: 0.5;
  max-width: 230px;
  font-size: ${props => (props.width)/3 > 73 ? 73 : (props.width)/3}px;
  width: ${props => props.width}px;
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