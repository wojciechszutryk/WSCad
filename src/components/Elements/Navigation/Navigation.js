import React, {useCallback, useEffect, useState} from 'react';
import {Dragger, Minimizer, NavigationWrapper} from "./NavigationStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDraftingCompass, faCompress, faCog, faPalette} from '@fortawesome/free-solid-svg-icons'
import AppSettings from "./AppSettings";
import {faFileImage} from "@fortawesome/free-regular-svg-icons";
import StyleSettings from "./StyleSettings";
import DrawingOptions from "./DrawingOptions";
import PageSettings from "./PageSettings";

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
    const [minimized, setMinimized] = useState([true, true, true, false]);

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

    useEffect(() => {
        const navigation1 = document.getElementById("navigation1");
        const navigation2 = document.getElementById("navigation2");
        const navigation3 = document.getElementById("navigation3");
        const navigation4 = document.getElementById("navigation4");
        dragElement(navigation1);
        dragElement(navigation2);
        dragElement(navigation3);
        dragElement(navigation4);
        navigation1.classList.toggle('minimized');
        navigation2.classList.toggle('minimized');
        navigation3.classList.toggle('minimized');
        navigation4.classList.toggle('minimized');
        setTimeout(() => toggleMinimized("navigation1"), 500);
        setTimeout(() => toggleMinimized("navigation2"), 500);
        setTimeout(() => toggleMinimized("navigation3"), 500);
        setTimeout(() => toggleMinimized("navigation4"), 500);
    },[]);

    return (
        <nav>
            {/*Drawing*/}
            <NavigationWrapper id={"navigation1"} classList={'minimized'}>
                <Minimizer onClick={() => toggleMinimized("navigation1")}>
                    {minimized[0] ?
                        <FontAwesomeIcon icon={faCompress} />:
                        <FontAwesomeIcon icon={faDraftingCompass} />}
                </Minimizer>
                <Dragger id="navigation1Dragger"/>
                <DrawingOptions/>
            </NavigationWrapper>
            {/*AppSettings*/}
            <NavigationWrapper id={"navigation2"} classList={'minimized'}>
                <Minimizer onClick={() => toggleMinimized("navigation2")}>
                    {minimized[1] ?
                        <FontAwesomeIcon icon={faCompress} />:
                        <FontAwesomeIcon icon={faCog} />}
                </Minimizer>
                <Dragger id="navigation2Dragger"/>
                <AppSettings resetMinimized={setMinimized}/>
            </NavigationWrapper>
            {/*PageSettings*/}
            <NavigationWrapper id={"navigation3"} classList={'minimized'}>
                <Minimizer onClick={() => toggleMinimized("navigation3")}>
                    {minimized[2] ?
                        <FontAwesomeIcon icon={faCompress} />:
                        <FontAwesomeIcon icon={faFileImage} />}
                </Minimizer>
                <Dragger id="navigation3Dragger"/>
                <PageSettings/>
            </NavigationWrapper>
            {/*Styles*/}
            <NavigationWrapper id={"navigation4"} classList={'minimized'}>
                <Minimizer onClick={() => toggleMinimized("navigation4")}>
                    {minimized[3] ?
                        <FontAwesomeIcon icon={faCompress} />:
                        <FontAwesomeIcon icon={faPalette} />}
                </Minimizer>
                <Dragger id="navigation4Dragger"/>
                <StyleSettings/>
            </NavigationWrapper>

        </nav>
    );
};

export default Navigation;
