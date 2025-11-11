import React, { useEffect, useRef, useState } from 'react'
import note from "./assets/sticky_note.png"
import { check_for_all } from './utils';
function Card({ cordinates, allLocations, index, text }) {
    const [corr, setCorr] = useState(cordinates)
    const a = useRef([]);
    useEffect(() => {
        document.addEventListener("mousemove", e => {
            // console.log(e.clientY)
        })
    }, [])
    return (
        <div id='card' style={{ top: corr.y, left: corr.x }} onDragStart={(e) => {
            a.current = [e.clientY - corr.y, e.clientX - corr.x]
        }} draggable={true} onDragEnd={(e) => {
            let topHeight = document.querySelector("#top").offsetHeight;
            let y = e.clientY + e.target.offsetHeight - a.current[0]; //element ke end ki position(Y-axis)
            let x = e.clientX + e.target.offsetWidth - a.current[1];  //element ke end ki position (X-axis)
            console.log(e.clientY - a.current[0])
            if (topHeight > (y - e.target.offsetHeight)) {
                return;
            }
            if (!check_for_all({ random_num_x: e.clientX, random_num_y: e.clientY, height: e.target.offsetHeight, width: 300 }, allLocations.current.map((el) => el.cordinates))) {
                return;
            }
            let startX = e.clientX - a.current[1];
            let startY = e.clientY - a.current[0];
            let x1 = e.clientX - a.current[1];
            let y1 = e.clientY - a.current[0];
            let isEnd = false;
            let isStart = false;
            if (x > window.innerWidth) {
                x1 = window.innerWidth - e.target.offsetWidth;
                isEnd = true;
            }
            if (y > window.innerHeight) {
                y1 = window.innerHeight - e.target.offsetHeight;
                isEnd = true;
            }
            if (startX <= 0) {
                isStart = true;
                x1 = 0;
            }
            if (startY <= 0) {
                y1 = 0;
                isStart = true;
            }
            if (isEnd || isStart) {
                setCorr({ x: x1, y: y1 })
                allLocations.current[index] = { cordinates: { x: x1, y: y1, height: e.target.offsetHeight, width: e.target.offsetWidth }, text: text }
            }
            else {
                setCorr({ x: e.clientX - a.current[1], y: e.clientY - a.current[0] })
                allLocations.current[index] = { cordinates: { x: e.clientX - a.current[1], y: e.clientY - a.current[0], height: e.target.offsetHeight, width: e.target.offsetWidth }, text: text }
            }
        }}>
            <p>{text}</p>
        </div>
    )
}

export default Card