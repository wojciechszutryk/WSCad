import React, {useEffect, useRef} from 'react';
import {StyledCurve} from "./CurveStyles";
import {connect} from "react-redux";
import {addCurve} from "../../../data/actions/drawingActions/drawingActions";
import {setDrawing} from "../../../data/actions/applicationActions/applicationActions";
import CurveSVG from "../../sheetElements/curve";

const Curve = ({id, color, pattern, lineWidth, fillColor, curves, addCurve, sheetWidth, sheetHeight, setDrawing}) => {
    const curveD = useRef('M100,250 C100,100 400,100 400,250');

    useEffect(() => {
        let container, svg, cType, code, point = {}, line = {}, fill = false, drag = null, dPoint;

        function Init() {
            const c = svg.getElementsByTagName("circle");
            for (let i = 0; i < c.length; i++) {
                point[c[i].getAttributeNS(null,"id")] = {
                    x: parseInt(c[i].getAttributeNS(null,"cx"),10),
                    y: parseInt(c[i].getAttributeNS(null,"cy"),10)
                };
            }

            line.l1 = svg.getElementById("l1");
            line.l2 = svg.getElementById("l2");
            line.curve = svg.getElementById("curve");
            code = document.getElementById("code");
            svg.onmousedown = svg.onmousemove = svg.onmouseup = Drag;
            svg.ontouchstart = svg.ontouchmove = svg.ontouchend = Drag;
            DrawSVG();
        }

        function DrawSVG() {
            line.l1.setAttributeNS(null, "x1", point.p1.x);
            line.l1.setAttributeNS(null, "y1", point.p1.y);
            line.l1.setAttributeNS(null, "x2", point.c1.x);
            line.l1.setAttributeNS(null, "y2", point.c1.y);

            const c2 = (point.c2 ? "c2" : "c1");
            line.l2.setAttributeNS(null, "x1", point.p2.x);
            line.l2.setAttributeNS(null, "y1", point.p2.y);
            line.l2.setAttributeNS(null, "x2", point[c2].x);
            line.l2.setAttributeNS(null, "y2", point[c2].y);

            const d =
                "M"+point.p1.x+","+point.p1.y+" "+cType+
                point.c1.x+","+point.c1.y+" "+
                (point.c2 ? point.c2.x+","+point.c2.y+" " : "")+
                point.p2.x+","+point.p2.y+
                (fill ? " Z" : "");
            line.curve.setAttributeNS(null, "d", d);
            curveD.current = d;

            if (code) {
                code.textContent = '<path d="'+d+'" />';
            }
        }

        function Drag(e) {

            e.stopPropagation();
            let t = e.target, id = t.id, et = e.type, m = MousePos(e);

            if (!drag && et === "mousedown" && id === "curve") {
                fill = !fill;
                t.setAttributeNS(null, "class", (fill ? "fill" : ""));
                DrawSVG();
            }

            if (!drag && typeof(point[id]) != "undefined" && (et === "mousedown" || et === "touchstart")) {
                drag = t;
                dPoint = m;
            }

            if (drag && (et === "mousemove" || et === "touchmove")) {
                id = drag.id;
                point[id].x += m.x - dPoint.x;
                point[id].y += m.y - dPoint.y;
                dPoint = m;
                drag.setAttributeNS(null, "cx", point[id].x);
                drag.setAttributeNS(null, "cy", point[id].y);
                DrawSVG();
            }

            if (drag && (et === "mouseup" || et === "touchend")) {
                drag = null;
            }

        }

        function MousePos(event) {
            return {
                x: Math.max(0, event.pageX),
                y: Math.max(0, event.pageY)
            }
        }

        function handleCurve(){
            container = document.getElementById("container");
            if (container) {
                cType = container.className;
                svg = document.getElementById("svg");
                Init();
            }
        }

        const stopDrawing = (e) => {
            const finish = () => {
                window.removeEventListener("keydown", stopDrawing);
                window.removeEventListener("mousemove", handleCurve);
                const [curve, styles] = [{}, {color, pattern, fillColor, lineWidth}];
                curve['d'] = curveD.current;
                curve['styles'] = styles;
                curve['id'] = id;
                addCurve(curve);
                setDrawing('');
            }
            if (e && e.code === 'Escape') return finish();
        }
        window.addEventListener("keydown", stopDrawing);
        document.addEventListener('mousemove', handleCurve);

        return () => {
            setDrawing('');
            window.removeEventListener("keydown", stopDrawing);
            document.removeEventListener("mousemove", handleCurve);
        };
    }, [id, setDrawing, addCurve, color, fillColor, lineWidth, curves.length]);

    return (
        <StyledCurve
            sheetWidth={sheetWidth}
            sheetHeight={sheetHeight}>
            <div id="container" className="C">
                <svg id="svg">
                    <CurveSVG id="curve"
                              color= {color}
                              linePattern = {pattern}
                              lineWidth = {lineWidth}
                              fillColor = {fillColor}
                              d="M100,250 C100,100 400,100 400,250"/>
                    <g id="main">
                        <circle id="p1" cx="100" cy="250" r="16"/>
                        <circle id="p2" cx="400" cy="250" r="16"/>

                        <circle id="c1" cx="100" cy="100" r="8"/>
                        <circle id="c2" cx="400" cy="100" r="8"/>

                        <line id="l1" x1="100" y1="250" x2="100" y2="100"/>
                        <line id="l2" x1="400" y1="250" x2="400" y2="100"/>
                    </g>
                </svg>
            </div>
        </StyledCurve>
    )
};

const ConnectedCurve = connect(state => ({
        drawing: state.application.drawing,
        offset: state.application.sheetOffset,
        sheetWidth: state.application.sheetWidth,
        sheetHeight: state.application.sheetHeight,
        curves: state.elements.curves,
        color: state.style.color,
        fillColor: state.style.fill,
        pattern: state.style.pattern,
        lineWidth: state.style.lineWidth,
    }),
    {
        addCurve,
        setDrawing,
    }
)(Curve);

export default ConnectedCurve;
