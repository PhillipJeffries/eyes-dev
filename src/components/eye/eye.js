import React from "react";
import {useState, useEffect, useRef} from "react";

import "./eye.scss";




const Eye = () => {

    const [coords, setCoords] = useState({top: 30, left: 30})

    useEffect(()=>{
        document.addEventListener("mousemove", (e)=>{
            console.log("useEffect")
            if(e.pageX <=120 && e.pageY <= 120){
                setCoords({top: 120 / (document.body.clientHeight / 30), left: 120 / (document.body.clientWidth / 30)})}
            else if(e.pageY <= 120) {
                setCoords({top: 120 / (document.body.clientHeight / 30), left: e.pageX / (document.body.clientWidth / 30)})
            }else if(e.pageX <= 120){
                setCoords({top: e.pageY / (document.body.clientHeight / 30), left: 120 / (document.body.clientWidth / 30)})
            }else if(e.pageY <= 120 && e.pageX >= document.body.clientWidth ){
                console.log('dfg')
                setCoords({top: 120 / (document.body.clientHeight / 30), left: (document.body.clientWidth) / (document.body.clientWidth / 30)})
            

            }else
            setCoords({top: e.pageY / (document.body.clientHeight / 30), left: e.pageX / (document.body.clientWidth / 30)})
        })
    }, []);

  


    return(
        <div className="eyeWrapper">
            <div className="iris" style={{left: coords.left, top: coords.top}}>
                <div className="eyePupil">
                </div>
            </div>
            <div className="eyeShadow"></div>
            <div className="eyeHighlight"></div>
        </div>
    )
};

export default Eye;
