import React, {Component} from 'react';



const LDLsummaryLeft = props =>{
    return(
        <div className = "entireLeftSide">
            <div className = "image">


            <svg width="100px" height="124px" viewBox="0 0 100 124" version="1.1" >

                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="mypage" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Artboard-2" transform="translate(-463.000000, -251.000000)">
                        <g id="myapple" transform="translate(464.000000, 252.000000)">
                            <polygon id="Path-2" stroke="#979797" stroke-width="1" fill="#B8E986" fill-rule="nonzero" points="37.6969063 32.2486699 28.7269559 31 17.8479133 33.021364 7.38446505 41.0247392 2.40629591 50.3366939 0 62.7342362 0 73.1613612 2.40629591 84.7046 6.27542727 95.1935217 11.0733955 104.755965 17.8479133 113.906117 25.635236 121.619378 37.6969063 121.619378 45.5026264 117.650239 55.767948 116.935568 64.1793698 120.811304 76.5514386 120.811304 83.6236182 113.906117 91.6850161 104.755965 97.8627953 90.3063965 92.8247164 86.8825785 86.1421859 79.9321052 81.5758373 68.3893382 82.7815797 55.6040337 88.3428074 47.393569 94.2465113 42.3083171 88.3428074 36.100819 75.5197646 31 64.1793698 32.2486699 51.4072738 36.100819 46.8635682 36.100819 42.3717529 34.1247411"></polygon>
                            <text id="My-APPLE!" font-family="Helvetica-Bold, Helvetica" font-size="10" font-weight="bold" fill="#000000">
                                <tspan x="19.0131836" y="71">My APPLE!</tspan>
                            </text>
                            <path d="M63.4086701,0 C60.7385139,0.4642691 58.2460486,1.57487931 55.9312742,3.33183063 C52.4591126,5.96725761 52.5573172,6.34827161 50.0016252,10.1761646 C47.4459333,14.0040575 46.86983,15.0105803 45.7867156,18.5262614 C45.0646393,20.8700488 44.839624,23.3774522 45.1116696,26.0484717 C46.1265669,26.9951708 47.9897441,26.9951708 50.7012012,26.0484717 C54.7683868,24.628423 55.0076813,24.4857941 58.395593,21.41042 C60.6542007,19.3601706 62.5535439,16.8538679 64.0936224,13.8915119 L68.1566349,6.3678864 L69.3218086,0 L64.0936224,0" id="Path-3" stroke="#979797" stroke-width="1" fill="#417505" fill-rule="nonzero"></path>
                        </g>
                    </g>
                </g>
            </svg>

            </div>
            <p className = "P1">03/18/2018 - Rosavastatin 20mg</p>
            <p className = "P2">LDL GOAL: <span> &lt; 70</span></p>
            <p className = "P3"> DM-1, HeFH, ASCVD  |  <span className="risk">RISK SCORE:</span> 7</p>
            <p className = "P4"> <span className="intensity">STATIN INTENSITY:</span> [HIGH]</p>
        </div>
    )
}

export default LDLsummaryLeft
