import styled from "styled-components";

export const NavigationWrapper = styled.section`
  position: absolute;
  top: 50px;
  left: calc(100% - 260px);
  width: 210px;
  height: 84px;
  background-color: ${({theme}) => theme.background.dark};
  border: 3px solid ${({theme}) => theme.border.normal};
  transition: 0s;
  z-index: 10;
  &:nth-child(2){
    top: 432px;
    left: calc(100% - 150px);
    width: 100px;
    height: 50px;
  }

  &:nth-child(3){
    top: 314px;
    left: calc(100% - 260px);
    width: 210px;
    height: 50px;
  }

  &:nth-child(4){
    top: 200px;
    left: calc(100% - 260px);
    width: 210px;
    height: 50px;
  }
  
  &.minimized{
    top: calc(100% - 30px) !important;
    left: calc(100% - 150px) !important;
    width: 50px;
    height: 30px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    border-bottom: none;
    cursor: pointer;
    
    &:nth-child(2){
      left: calc(100% - 80px) !important;
    }

    &:nth-child(3){
      left: calc(100% - 220px) !important;
    }

    &:nth-child(4){
      left: calc(100% - 290px) !important;
    }

    &:hover{
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
  right: 0;
  height: 20px;
  width: 20px;
  z-index: 10;
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

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 5px;
`;

export const StyleInfo = styled.div`
  position: absolute;
  top: -50px;
  background-color: ${({theme}) => theme.background.normal};
  color: ${({theme}) => theme.font.normal};
  display: inline-block;
  width: 84px;
  height: 34px;
  margin-right: 3px;
  border: 2px solid ${({theme}) => theme.border.normal};
  text-align: center;
  line-height: 34px;
  transition: .1s;
  font-family: roboto, sans-serif;
  font-size: 12px;
  &.firstStyle{
    top: -90px;
    left: -30px;
  }
  &.secondStyle{
    left: -30px;
    cursor: pointer;
    background-color: ${({theme}) => theme.background.normalHover};
  }
  &.thirdStyle{
    top: -90px;
    left: 120px;
  }
  &.fourthStyle{
    left: 120px;
    cursor: pointer;
    &:hover{
      background-color: ${({theme}) => theme.background.normalHover};
    }
  }
`;