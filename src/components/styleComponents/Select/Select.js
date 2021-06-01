import React, {useState} from 'react';
import {OptionItem, Options} from "./SelectStyle";
import {NormalButton} from "../ButtonStyles";

const Select = ({options, left=false, children}) => {
    const [optionsVisible, setOptionsVisible] = useState(false);
    const toggleOptions = () => {
        setOptionsVisible(!optionsVisible);
    }
    const opt = options.map(opt => (
        <OptionItem onClick={opt.onSelect} left={left} key={opt.onSelect}>
            <svg>
                {opt.line}
            </svg>
        </OptionItem>
    ));
    return (
        <>
            <NormalButton onClick={toggleOptions}>
                {children}
                {optionsVisible ?
                    <Options>
                        {opt}
                    </Options>
                    : null}
            </NormalButton>
        </>
    );
};

export default Select;
