import React, {Component} from 'react';

const LDLsummaryRightcomponent = props =>{
    return(
        <div className= "statsGroup">
        <p><span>{props.ldlDescrip}</span>{props.number}{props.date}</p>
        <p>{props.name}</p>
        </div>
    )

}





export default LDLsummaryRightcomponent
