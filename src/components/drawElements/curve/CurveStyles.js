import styled from "styled-components";
import {SheetStyles} from "../../Elements/Workspace/WrokspaceStyles";

export const StyledCurve = styled(SheetStyles)`
    height: ${props => props.sheetHeight}px;
    width: ${props => props.sheetWidth}px;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transform: translateY(${props => (props.sheetHeight)*(-1)}px);
    background-color: transparent;
    
    & #container{
      width: 100%;
      height: 100%;
      background: transparent;
      margin: 0;
      text-align: center;
    }

    
    #code{
      display: block;
      width: auto;
      font: bold 3vw monospace;
      margin: 0;
      padding: 0;
      color: #1E1935;
      background: rgba(221,221,221,0.35);
    }
    
    &::selection{
      background: #EF2D56;
      color: transparent;
    }

    & svg, g{
      width: ${props => props.sheetWidth}px;
      height: ${props => props.sheetHeight}px;
    }
    
    & path{
      stroke-width: 8;
      stroke: #1E1935;
      stroke-linecap: round;
      fill: none;
    }

    
    & path.fill{
      fill: #1E1935;
    }

    
    & circle{
      stroke-width: 2;
      stroke: #EF2D56;
      fill: #fff;
    }

    
    & circle:hover{
      fill: #EF2D56;
      cursor: move;
    }

    
    & line{
      stroke-width: 1;
      stroke: #999;
      stroke-linecap: round;
      stroke-dasharray: 5,3;
    }
`;