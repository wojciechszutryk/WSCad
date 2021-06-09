import React from 'react';
import {ImageInputStyled} from "./ImageInputStyles";

const ImageInput = ({offsetX}) => {
    return (
        <ImageInputStyled offset={offsetX*0.4} className="form__group field">
            <input type="input" className="form__field" placeholder="Img URL"/>
            <label htmlFor="name" className="form__label">Img URL</label>
        </ImageInputStyled>
    );
};

export default ImageInput;
