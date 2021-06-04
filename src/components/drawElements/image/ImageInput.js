import React from 'react';
import {ImageInputStyled} from "./ImageInputStyles";

const ImageInput = ({offset}) => {
    return (
        <ImageInputStyled offset={offset} className="form__group field">
            <input type="input" className="form__field" placeholder="Img URL"/>
            <label htmlFor="name" className="form__label">Img URL</label>
        </ImageInputStyled>
    );
};

export default ImageInput;
