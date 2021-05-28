import React, {useState} from 'react';
import {OptionItem, Options, SelectStyle} from "./SelectStyle";

const Select = ({options}) => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    }
    const opt = options.map(opt => (
        <OptionItem onClick={opt.onSelect}>
            {opt.line}
        </OptionItem>
    ));
    return (
        <>
            <SelectStyle onClick={toggleOptions}>
                {optionsVisible ?
                    <Options>
                        {opt}
                    </Options>
                    : null}
            </SelectStyle>
        </>
    );
};

export default Select;
