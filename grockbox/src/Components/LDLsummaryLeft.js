import React, {Component} from 'react';
import image from './image.png'




const LDLsummaryLeft = props =>{
    return(
        <div className = "entireLeftSide">
        <div className = "image">
        <img  src = {image}/>


        </div>
        <p className = "P1">03/18/2018 - Rosavastatin 20mg</p>
        <p className = "P2">LDL GOAL: <span> &lt; 70</span></p>
        <p className = "P3"> DM-1, HeFH, ASCVD  |  <span className="risk">RISK SCORE:</span> 7</p>
        <p className = "P4"> <span className="intensity">STATIN INTENSITY:</span> [HIGH]</p>
        </div>
    )
}

export default LDLsummaryLeft
