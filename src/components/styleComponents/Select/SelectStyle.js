import styled from 'styled-components';

export const Options = styled.div`
  position: absolute;
  top: 34px;
  left: 0;
`;

export const OptionItem = styled.div`
  min-height: 30px;
  & svg{
    width: 100px;
    background-color: ${({theme}) => theme.paper.normal};
    //transform: translateX(-35px);
    transform: ${props => props.left ? 'translateX(-70px)' : 'translateX(0)'};
    border: 2px solid ${({theme}) => theme.border.normal};
    z-index: 1;
    &:hover{
      background-color: ${({theme}) => theme.paper.hover};
    }
    & line{
      transform: translate(15px, 15px);
    }
  }
`;