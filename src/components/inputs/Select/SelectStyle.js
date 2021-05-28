import styled from 'styled-components';

export const SelectStyle = styled.button`
    background-color: transparent;
    color: ${({theme}) => theme.color.normal};
    display: inline-block;
    position: relative;
    width: 34px;
    height: 34px;
    margin-right: 3px;
    border: 2px solid ${({theme}) => theme.border.normal};
    border-radius: 20%;
    cursor: pointer;
    overflow: hidden;
`;

export const Options = styled.div`
  position: absolute;
  top: 34px;
  left: 0;
`;

export const OptionItem = styled.div`
  background-color: red ;
  min-height: 30px;
  & svg{
    width: 100px;
    background-color: ${({theme}) => theme.paper.normal};
    transform: translateX(-35px);
    border: 2px solid ${({theme}) => theme.border.normal};
    &:hover{
      background-color: ${({theme}) => theme.paper.hover};
    }
    & line{
      transform: translate(15px, 15px);
    }
  }
`;