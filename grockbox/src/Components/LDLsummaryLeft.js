import React, {Component} from 'react';



const LDLsummaryLeft = props =>{
    return(
        <div className = "entireLeftSide">
        <div className = "image">


        <svg width="80px" height="43px" viewBox="0 0 80 43" version="1.1" >

            <desc>Created with Sketch</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                <g id="weirdColorTabs" transform="translate(-59.000000, -36.000000)" fill-rule="nonzero" stroke="#A04040" stroke-width="10">
                    <path d="M64.8428247,73.5 C64.8428247,65.3508873 71.0134452,54.9811895 74.8650404,49.9795567 C82.189566,40.4680203 94.8954645,41.5888067 99.2817752,41.5888067 C104.452599,41.5888067 117.518515,42.8990116 123.102541,49.9795567 C130.387919,59.2174178 133.720726,68.8755057 133.720726,73.5" id="Line"></path>
                </g>
            </g>
        </svg>
        </div>
        <p className = "P1">03/18/2018 - Rosavastatin 20mg</p>
        <p className = "P2">LDL GOAL: <span> &lt; 70</span></p>
        <p className = "P3"> DM-1, HeFH, ASCVD  |  <span className="risk">RISK SCORE</span>: 7</p>
        <p className = "P4"> <span className="intensity">STATIN INTENSITY:</span> [HIGH]</p>
        </div>
    )
}

export default LDLsummaryLeft
