import styled from 'styled-components';

const ParentInput = styled.input`
  background-color: transparent;
  padding: 0;
  color: ${({theme}) => theme.color.normal};
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  margin: 0 3px 0 0;
  border: 2px solid ${({theme}) => theme.border.normal};
  border-radius: 20%;
  cursor: pointer;
  overflow: hidden;

  &:hover{
    border: 2px solid ${({theme}) => theme.border.normalHover};
  }
`;

export const ColorInput = styled(ParentInput)`
  position: relative;
`;

export const NumberInput = styled(ParentInput)`
  text-align: center;
  &:focus{
    outline: none;
  }
`;

export const FileInput = styled(ParentInput)`
  position: absolute;
  top: 40px;
  left: -35px;
  height: 120px;
  width: 111px;
  background-color: ${({theme}) => theme.background.dark};
`;