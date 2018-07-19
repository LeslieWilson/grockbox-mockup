import React, {Component} from 'react';

const LDLsummaryRightcomponent = props =>{
    return(
        <div className= "statsGroup">
        <div className="rightDivs">
        <div className = "ldlDescrip">{props.ldlDescrip}</div>
        <div className= "number">{props.number}</div>
        <div className = "date">{props.date}</div>
        </div>
        <p className = "name">{props.name}</p>

        </div>
    )

}





export default LDLsummaryRightcomponent
