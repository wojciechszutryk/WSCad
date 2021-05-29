import React, {useState} from 'react';
import {OptionItem, Options, SelectStyle} from "./SelectStyle";

const Select = ({options, left=false, children}) => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    }
    const opt = options.map(opt => (
        <OptionItem onClick={opt.onSelect} left={left}>
            {opt.line}
        </OptionItem>
    ));
    return (
        <>
            <SelectStyle onClick={toggleOptions}>
                {children}
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
