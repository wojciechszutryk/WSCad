import styled from 'styled-components';

export const Options = styled.div`
  position: absolute;
  top: 34px;
  left: 0;
`;

export const OptionItem = styled.svg`
    position: fixed;
    width: 100px;
    height: 30px;
    background-color: ${({theme}) => theme.paper.normal};
    //transform: translateX(-35px);
    transform: ${props => props.left ? 'translateX(-70px)' : 'translateX(0)'};
    border: 2px solid ${({theme}) => theme.border.normal};
    z-index: 1;
    &:hover{
      background-color: ${({theme}) => theme.paper.hover};
    }
    &:first-child{
      transform: ${props => props.left ? 'translate(-70px, 0)' : 'translate(0, 0)'};
    }
    &:nth-child(2){
      transform: ${props => props.left ? 'translate(-70px, 30px)' : 'translate(0, 30px)'};
    }
    &:nth-child(3){
      transform: ${props => props.left ? 'translate(-70px, 60px)' : 'translate(0, 60px)'};
    }
    &:nth-child(4){
      transform: ${props => props.left ? 'translate(-70px, 90px)' : 'translate(0, 90px)'};
    }
    & line{
      transform: translate(15px, 15px);
    }
`;