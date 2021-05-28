import styled from "styled-components";

export const NavigationWrapper = styled.section`
  position: absolute;
  top: 10px;
  left: calc(50% - 250px);
  width: 500px;
  height: 50px;
  background-color: ${({theme}) => theme.background.dark};
  border: 3px solid ${({theme}) => theme.border.normal};
  transition: 0s;
  
  &:nth-child(2){
    top: calc(100% - 200px);
    left: calc(100% - 150px);
    width: 100px;
    height: 50px;
  }
  
  &.minimized{
    top: calc(100% - 30px) !important;
    left: calc(100% - 70px) !important;
    width: 50px;
    height: 30px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom: none;
    cursor: pointer;
    
    &:nth-child(2){
      left: calc(100% - 150px) !important;
    }

    &:hover{
      //top: calc(100% - 35px) !important;
      //left: calc(100% - 75px) !important;
      transform: translate(-5px,-5px);
      background-color: ${({theme}) => theme.background.darkHover};
      width: 60px;
      height: 35px;
      border-width: 4px;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
    }
    & *{
      display: none;
    }
    & button:first-child {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
      background-color: transparent;
      font-size: 20px;
      transition: .1s;
      color: ${({theme}) => theme.color.normal};
      &:hover{
        background-color: ${({theme}) => theme.background.darkHover};
        color: ${({theme}) => theme.color.dark};
        font-size: 23px;
      }
      & svg{
        display: block;
        margin-left: auto;
        margin-right: auto;
        & path{
          display: block;
        }
      }
    }
  }
`;

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

export const Minimizer = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  cursor: pointer;
  background-color: ${({theme}) => theme.border.normal};
  color: ${({theme}) => theme.icon.normal};
  opacity: 1;
  transition: .1s;
  &:hover{
    background-color: ${({theme}) => theme.border.darkHover};
    color: ${({theme}) => theme.icon.hover};
    font-size: 0.1rem;
  }
  & svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & path {
      display: block;
    }
  }
`;