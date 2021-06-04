import styled from "styled-components";

export const ImageInputStyled = styled.div`
    position: relative;
    padding: 15px 0 0;
    margin-top: ${props => props.offset/2}px;
    margin-left: 10px;
    margin-right: 10px;
    width: ${props => props.offset-20}px;

  & .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid ${({theme}) => theme.font.normal};
    outline: 0;
    font-size: 1.3rem;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  & .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${({theme}) => theme.font.normal};
  }

  & .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: ${({theme}) => theme.border.normalHover};
      font-weight:700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, ${({theme}) => theme.border.normalHover},${({theme}) => theme.border.normal});
    border-image-slice: 1;
  }

  & .form__field{
    &:required,&:invalid { box-shadow:none; }
  }
`;