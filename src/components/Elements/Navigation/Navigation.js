import React, {useEffect} from 'react';
import {NavigationWrapper} from "../../wrappers/NavigationWrapper";
import {Dragger} from "./NavigationStyles";

function dragElement(elem) {
    console.log(elem)
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elem.id + "Dragger")) document.getElementById(elem.id + "Dragger").onmousedown = dragMouseDown;
    else elem.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        elem.style.opacity = '0.7'

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elem.style.top = (elem.offsetTop - pos2) + "px";
        elem.style.left = (elem.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        elem.style.opacity = '1'
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

const Navigation = () => {
    useEffect(() => {
        dragElement(document.getElementById("navigation"));
    },[])
    return (
        <NavigationWrapper id={"navigation"}>
            <Dragger id="navigationheader"/>
            <p>Move</p>
            <p>this</p>
            <p>DIV</p>
        </NavigationWrapper>
    );
};

export default Navigation;
