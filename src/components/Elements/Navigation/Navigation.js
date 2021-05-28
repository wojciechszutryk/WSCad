import React, {useEffect, useState} from 'react';
import {Dragger, Minimizer, NavigationWrapper} from "./NavigationStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDraftingCompass, faCompress } from '@fortawesome/free-solid-svg-icons'

function dragElement(elem) {
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
    const [minimized, setMinimized] = useState([false, false]);

    useEffect(() => {
        dragElement(document.getElementById("navigation1"));
        dragElement(document.getElementById("navigation2"));
    },[])

    const toggleMinimized = (name) => {
        const menu = document.getElementById(name);
        menu.style.transition = '.5s';
        const stateCopy = [...minimized];
        const index = parseInt(name.slice(-1)) - 1;
        stateCopy[index] = !minimized[index];
        setMinimized(stateCopy);
        menu.classList.toggle('minimized');
        setTimeout(function(){ menu.style.transition = '0s'; }, 500);
    }

    return (
        <nav>
            <NavigationWrapper id={"navigation1"}>
                <Minimizer onClick={() => toggleMinimized("navigation1")}>
                    {minimized[0] ?
                        <FontAwesomeIcon icon={faDraftingCompass} />:
                        <FontAwesomeIcon icon={faCompress} />}
                </Minimizer>
                <Dragger id="navigation1Dragger"/>
            </NavigationWrapper>
            <NavigationWrapper id={"navigation2"}>
                <Minimizer onClick={() => toggleMinimized("navigation2")}>
                    {minimized[1] ?
                        <FontAwesomeIcon icon={faDraftingCompass} />:
                        <FontAwesomeIcon icon={faCompress} />}
                </Minimizer>
                <Dragger id="navigation2Dragger"/>
            </NavigationWrapper>
        </nav>
    );
};

export default Navigation;
