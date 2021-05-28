import styled from 'styled-components';

const ParentButton = styled.button`
    text-decoration: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
`;

export const SetDarkButton = styled(ParentButton)`
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
    & svg:first-child{
        position: absolute;
        top: 40%;
        left: -20px;
        transition: left .1s;
        z-index: 1;
    }
    & svg:nth-child(2){
        position: absolute;
        left: 5px;
        top: 5px;
        transition: left .1s, font-size .15s;
        font-size: 20px;
    }
    &:hover{
        background-color: rgb(78, 96, 110)
    }
    &:hover svg:first-child{
        color: white;
        left: 2px;
    }
    &:hover svg:nth-child(2){
        color: rgb(232, 228, 153);
        left: 8px;
        font-size: 30px;
    }
`;

export const SetLightButton = styled(SetDarkButton)`
    background-color: transparent;
    & svg:first-child{
        top: 40%;
        left: -20px;
        transition: left .1s;
        z-index: 1;
    }
    & svg:nth-child(2){
        transition: left .1s, transform .2s;
    }
    &:hover{
        background-color: rgb(171, 212, 245);
    }
    &:hover svg:first-child{
        color: white;
        left: 2px;
    }
    &:hover svg:nth-child(2){
        color: rgb(247, 244, 143);
        transform-origin: center;
        transform: rotate(60deg);
        font-size: 20px;
    }
`;