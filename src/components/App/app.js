import React from "react";
import {useState, useEffect} from "react";
import "./app.scss";

import Eye from "../eye/eye.js";




const App = () => { 
    
    const [eyes, setEyes] = useState([1,1,1,1,1,1,1]);
    
    const arr = [];
    
    const addEyeHandler = () =>{
        const newArr = [...arr, arr.length + 1]
        setEyes(newArr)
        console.log(eyes, arr)
    }



    document.body.addEventListener('click', ()=> addEyeHandler())
    
    
    
    
        
    return(
        <div className="app">
            <div className="eyesWrapper">
                {
                    eyes.map((e)=>{
                        return <Eye key={e}/>
                    })
                }
                
                    
                

            </div>
        </div>
    )
};

export default App;